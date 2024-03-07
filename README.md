# e-lect
E-Lectify) Remote voting system that allows users to vote from the comfort of their homes.
A Remote Voting System aims to tackle low voter turnout among internal migrants, NRIs, and soldiers employed overseas. It enables eligible voters to cast their ballots without travelling to their home constituencies, overcoming geographical barriers and enhancing democratic participation. Key components include user-friendly registration, facial recognition authentication, robust data security measures, and transparent result auditing.
To run the code, the folder must be downloaded on your system and modules/libraries used should be pre-installed.
Code flow- 
1. OCR for extraction of voter id number from voter id
2. Stores voter id number in encrypted database
3. OTP verification using email
4. Multi-face detection to ensure only 1 person is present in frame
5. Facial recognition with Aadhaar and PAN card
6. Passphrase authentication using speech recognition
7. Options for voting
8. Storage of voting data in database with AES encryption with UID (UID to ensure that a person can't vote more than once)
9. UI prototype contained in 'Figma Design' folder. Flask and React code under development.
