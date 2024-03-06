import mysql.connector
from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad
import base64
import cv2
import face_recognition
import random
import string
import speech_recognition as sr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import easyocr
import re

# MySQL database connection parameters
host = 'localhost'
user = 'root'
password = '1234567890'  # Update with your MySQL password
database = 'Confidential'
table = 'encrypted'

# AES encryption parameters
key = b'aesEncryptionKey'  # 128-bit key
init_vector = b'encryptionIntVec'  # 16 bytes IV

# Email configuration
EMAIL_ADDRESS = 'kuchbhidaalochalega@gmail.com'
EMAIL_PASSWORD = 'wioo hdpy ntrh zcin'
OTP_LENGTH = 6

# Sample input data (political party alias)
political_parties = ["Jan Kalyan Sabha", "Navbharat Nirman Party", "Rashtriya Vikas Dal"]

# Function to generate and send OTP via email
def send_otp_email(email, otp):
    subject = 'OTP for Authentication'
    body = f'Your OTP is: {otp}'
    
    msg = MIMEMultipart()
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = email
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)

# Function to verify OTP received via email
def verify_otp(email):
    otp = generate_otp()
    send_otp_email(email, otp)
    print("OTP has been sent to your email. Please check and enter the OTP.")
    entered_otp = input("Enter OTP: ")
    return entered_otp == otp

# AES encryption function
def encrypt(value):
    cipher = AES.new(key, AES.MODE_CBC, init_vector)
    padded_value = pad(value.encode('utf-8'), AES.block_size)
    encrypted = cipher.encrypt(padded_value)
    return base64.b64encode(encrypted).decode('utf-8')

# Function to generate OTP
def generate_otp(length=OTP_LENGTH):
    return ''.join(random.choices(string.digits, k=length))

# Function to create connection and cursor
def create_connection():
    return mysql.connector.connect(host=host, user=user, password=password, database=database)

# Function to save voter details to database
def save_voter_to_database(voter_id, token, cursor):
    encrypted = encrypt(voter_id)
    insert_query = f"INSERT INTO {table} (token, encrypted_string, votes) VALUES (%s, %s, %s)"
    try:
        cursor.execute(insert_query, (token, encrypted, None))
        print(f"Token {token} inserted successfully.")
        return True
    except mysql.connector.IntegrityError:
        print(f"Token {token} already exists in the table. Skipping insertion.")
        return False

# Function to update vote in database
def update_vote_in_database(token, vote, cursor):
    update_query = f"UPDATE {table} SET votes = %s WHERE token = %s"
    try:
        cursor.execute(update_query, (vote, token))
        print(f"Vote for party {vote} recorded successfully.")
        return True
    except mysql.connector.Error as e:
        print(f"Error occurred: {e}")
        return False

# Function to get latest token number from database
def get_latest_token_number(cursor):
    cursor.execute(f"SELECT MAX(token) FROM {table}")
    latest_token = cursor.fetchone()[0]
    return latest_token if latest_token is not None else 0

# Function to recognize speech
def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone(device_index=1) as source:
        print("Please say the passphrase:")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source, timeout=7)
    try:
        recognized_text = recognizer.recognize_google(audio).upper().replace(" ", "")
        print("You said:", recognized_text)
        return recognized_text
    except sr.UnknownValueError:
        print("Sorry, could not understand audio.")
        return None

# Function for passphrase authentication
def passphrase_authentication(passphrase):
    recognized_text = recognize_speech()
    if recognized_text == passphrase:
        print("Passphrase Matched!")
        return True
    else:
        print("Passphrase did not match, try again!")
        recognized_text = recognize_speech()
        if recognized_text == passphrase:
            print("Passphrase Matched!")
            return True
        else:
            print("Passphrase Not Matched!")
            return False

# Function to generate a random passphrase
def generate_passphrase(length=6):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

# Function to extract voter ID and its index
def extract_voter_id_and_index(text):
    pattern = r'\b[A-Za-z]{3}\d{7}\b'
    match = re.search(pattern, text)
    if match:
        return match.group(), match.start()
    else:
        return None, None

# Function for OCR
def ocr(image_path):
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path)
    extracted_text = ' '.join([text for _, text, _ in result])
    voter_id, index = extract_voter_id_and_index(extracted_text)
    return voter_id, index

# Function for voting
def vote_for_party():
    print("Please select a party to vote for:")
    print("1. Jan Kalyan Sabha")
    print("2. Navbharat Nirman Party")
    print("3. Rashtriya Vikas Dal")
    choice = input("Enter your choice (1/2/3): ")
    if choice in ['1', '2', '3']:
        return political_parties[int(choice) - 1]
    else:
        print("Invalid choice. Please select a valid option.")
        return None

# Function to extract face encoding from an image
def extract_face_encoding(image_path):
    image = face_recognition.load_image_file(image_path)
    encoding = face_recognition.face_encodings(image)
    if encoding:
        return encoding[0]
    else:
        return None

# Function to authenticate user using face recognition
def authenticate_face():
    aadhaar_encoding = extract_face_encoding("NishantAadhaar.jpg")
    pan_encoding = extract_face_encoding("NishantPPTpic.jpg")

    if aadhaar_encoding is None or pan_encoding is None:
        print("Error: Unable to extract face encoding from one or both of the photos.")
        return False

    user_email = input("Enter your email address for OTP verification: ")

    if verify_otp(user_email):
        video_capture = cv2.VideoCapture(1)

        while True:
            ret, frame = video_capture.read()

            face_locations = face_recognition.face_locations(frame)

            if len(face_locations) == 1:
                live_encoding = face_recognition.face_encodings(frame, face_locations)[0]
                aadhaar_match = face_recognition.compare_faces([aadhaar_encoding], live_encoding)
                pan_match = face_recognition.compare_faces([pan_encoding], live_encoding)

                if aadhaar_match[0]:
                    print("Face Matched with Aadhaar!")
                    passphrase = generate_passphrase()
                    print("Passphrase:", passphrase)
                    authenticated = passphrase_authentication(passphrase)
                    if authenticated:
                        print("User Authenticated!")
                        return True
                    else:
                        print("User Not Authenticated!")
                        return False
                elif pan_match[0]:
                    print("Face Matched with PAN Card!")
                    passphrase = generate_passphrase()
                    print("Passphrase:", passphrase)
                    authenticated = passphrase_authentication(passphrase)
                    if authenticated:
                        print("User Authenticated!")
                        return True
                    else:
                        print("User Not Authenticated!")
                        return False
            elif len(face_locations) > 1:
                print("More than 1 user detected, authentication failed")
                return False
            cv2.imshow('Video', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        video_capture.release()
        cv2.destroyAllWindows()
    else:
        print("OTP verification failed. Exiting authentication process.")
        return False

# Main function
def main():
    try:
        conn = create_connection()
        cursor = conn.cursor()

        cursor.execute(f"CREATE TABLE IF NOT EXISTS {table} (token INT PRIMARY KEY, voter_id VARCHAR(255), votes VARCHAR(255))")

        latest_token = get_latest_token_number(cursor)

        voter_id, index = ocr(r'NishantVoterID.jpg')
        if voter_id:
            print("Voter ID:", voter_id)
            if save_voter_to_database(voter_id, latest_token + 1, cursor):
                if authenticate_face():
                    vote = vote_for_party()
                    if vote is not None:
                        update_vote_in_database(latest_token + 1, vote, cursor)
                        print("Vote recorded successfully!")
                else:
                    print("Authentication failed. Vote not recorded.")
        else:
            print("Voter ID not found.")

        conn.commit()
    except mysql.connector.Error as err:
        print(f"Error: {err}")
    finally:
        try:
            cursor.close()
            conn.close()
        except AttributeError:
            pass

if __name__ == "__main__":
    main()