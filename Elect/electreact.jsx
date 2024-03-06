// Import React
import React from "react";

// Landing page components
const NavigationItem = ({ title }) => (
  <div className="flex-auto self-stretch my-auto">{title}</div>
);

const ImageWithBackground = ({ src, alt, overlayClasses, imageClasses }) => (
  <div className={`overflow-hidden relative flex-col ${overlayClasses}`}>
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-cover absolute inset-0 ${imageClasses}`}
    />
  </div>
);

const HeadingWithHighlight = ({ mainText, highlightText }) => (
  <div className="flex flex-col my-auto text-8xl text-white max-md:max-w-full max-md:text-4xl">
    <div>
      {mainText} <span className="text-white">{highlightText}</span>
    </div>
  </div>
);

const HomePage = () => {
  const navItems = ["Home", "About Us", "Contact", "Profile"];
  const headings = [
    { mainText: "YOUR", highlightText: "PLACE" },
    { mainText: "YOUR", highlightText: "CHOICE" },
  ];

  return (
    <div className="flex flex-col justify-center bg-black">
      <header className="flex overflow-hidden relative flex-col justify-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
        <ImageWithBackground
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33cc378acd276b2014eca86f844e5f387e961196da0de1199691ff8b024435e?apiKey=160408c8f6b04722b33db66d69d4ca24&"
          alt="Background"
          overlayClasses=""
          imageClasses="size-full"
        />
        <nav className="flex relative flex-col mx-14 mb-20 max-md:mr-2.5 max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center self-center max-w-full text-3xl text-white w-[880px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d6e0ae436db360f9cc0671a2ce37f8a8407a96e506260bbf359c3b8e85945f?apiKey=160408c8f6b04722b33db66d69d4ca24&"
              alt="Logo"
              className="self-stretch aspect-square w-[92px]"
            />
            {navItems.map((item, index) => (
              <NavigationItem key={index} title={item} />
            ))}
          </div>
          <section className="flex gap-5 justify-between mt-28 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            {headings.map((heading, index) => (
              <HeadingWithHighlight key={index} {...heading} />
            ))}
            <p className="mt-28 text-xl font-semibold text-neutral-500 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus.
              Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor orci cursus et a sapien integer faucibus.
              Turpis nisl condimentum consequat et non
            </p>
          </section>
          <ImageWithBackground
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d420bba4210662666ff46bda4de741d0cd7d68e88d935b4487b31b8dea86b8a5?apiKey=160408c8f6b04722b33db66d69d4ca24&"
            alt="Featured image"
            overlayClasses="flex items-start pt-12 min-h-[656px] max-md:max-w-full"
            imageClasses="size-full"
          />
        </nav>
      </header>
    </div>
  );
};

//export default HomePage;

// Login page components
const ImageComponent = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const SectionTitle = ({ children }) => (
  <div className="flex-auto text-5xl font-semibold max-md:text-4xl">{children}</div>
);

const SignUpInformation = () => (
  <div className="flex flex-col">
    <div className="text-6xl max-md:text-4xl">Sign Up</div>
    <div className="mt-9 text-3xl whitespace-nowrap">Enter your email to continue</div>
  </div>
);

const SendOTPForm = () => (
  <form className="flex flex-col flex-1 text-2xl text-white whitespace-nowrap max-md:max-w-full">
    <label htmlFor="emailInput" className="justify-center items-start py-8 pr-16 pl-7 border-2 border-white border-solid max-md:px-5 max-md:max-w-full sr-only">
      Email
    </label>
    <input
      type="email"
      id="emailInput"
      className="justify-center items-start py-8 pr-16 pl-7 border-2 border-white border-solid max-md:px-5 max-md:max-w-full"
      placeholder="Email"
      aria-label="Enter your email"
    />
    <button className="justify-center items-center self-center px-16 py-7 mt-11 max-w-full border-2 border-white border-solid w-[283px] max-md:px-5 max-md:mt-10">
      SEND OTP
    </button>
  </form>
);

const ElectLandingPage = () => (
  <div className="flex flex-col justify-center bg-black">
    <header className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85bef548aad9708a6ae28601de5bbfbc4088f627fb9dd283d5c622f89637f395?apiKey=160408c8f6b04722b33db66d69d4ca24&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mt-60 mb-32 w-full max-w-[1657px] max-md:my-10 max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-start self-center w-full text-white max-w-[1367px] max-md:flex-wrap max-md:max-w-full">
          <SectionTitle>
            Welcome To <br /> <span className="text-6xl">E-LECT</span>
          </SectionTitle>
          <SignUpInformation />
        </nav>
        <main className="flex gap-5 justify-between items-start mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="mt-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/719e30ea42251a072d9b7ae41a894cb686c276bcd7cf06880d4d4ee9c8cddbbb?apiKey=160408c8f6b04722b33db66d69d4ca24&"
                alt="Detailed image description 1"
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full grow w-full aspect-[0.96] max-md:mt-10"
              />
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d832b9446fc20f13edb8b5746fd033a7ad23b66c249c1fabbb2e153c58f5e93?apiKey=160408c8f6b04722b33db66d69d4ca24&"
                alt="Detailed image description 2"
                className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full self-stretch my-auto w-full aspect-[0.93] max-md:mt-10"
              />
            </div>
          </div>
          <SendOTPForm />
        </main>
      </div>
    </header>
  </div>
);

//export default ElectLandingPage;


// VotingSection Component
function VotingSection() {
    return (
      <main className="flex flex-col justify-center bg-black">
        <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33cc378acd276b2014eca86f844e5f387e961196da0de1199691ff8b024435e?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Background" className="object-cover absolute inset-0 size-full" />
          <div className="relative mt-48 mb-36 w-full max-w-[1643px] max-md:my-10 max-md:max-w-full">
            <HeaderComponent />
            <article className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
              <section className="flex relative flex-col grow mt-44 font-semibold max-md:mt-10 max-md:max-w-full">
                <h1 className="self-start ml-3 text-5xl text-white underline max-md:max-w-full max-md:text-4xl"> JAN KALYAN SABHA</h1>
                <p className="flex gap-5 justify-between mt-16 text-xl text-neutral-500 max-md:flex-wrap max-md:mt-10 max-md:max-w-">
                  Lorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus. Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor orci cursus et a sapien integer faucibus. Turpis nisl condimentum consequat et nonLorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus. Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor orci cursus et a sapien integer faucibus. Turpis nisl condimentum consequat et non
                </p>
                <button className="justify-center items-center self-center px-16 py-5 mt-16 max-w-full text-4xl text-black bg-white rounded-3xl w-[206px] max-md:px-5 max-md:mt-10" tabIndex="0">Vote</button>
              </section>
            </article>
          </div>
        </section>
      </main>
    );
  }
  
  // HeaderComponent Component
  function HeaderComponent() {
    return (
      <header className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <section className="flex relative flex-col text-5xl font-semibold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <h2 className="max-md:max-w-full max-md:text-4xl">CAST YOUR VOTE !</h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a441518f3010a8d7933e08830e1f3355212ff729231465859b27fb41bf2111b4?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Voting Symbol" className="mt-36 ml-6 max-w-full aspect-[1.01] w-[316px] max-md:mt-10 max-md:ml-2.5" />
          </section>
        </aside>
      </header>
    );
  }
  
  //export default VotingSection;
  
  // About Us Page
  function ImageGalleryItem({ src, alt, aspectRatio = "aspect-[1.67]" }) {
    return <img loading="lazy" src={src} alt={alt} className={`max-w-full ${aspectRatio} w-full`} />;
  }
  
  function ContentSection() {
    return (
      <section className="flex relative flex-col mt-16 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-6xl font-medium text-white max-md:max-w-full max-md:text-4xl">Why E-lect ?</h2>
        <p className="mt-14 text-xl font-semibold text-neutral-500 max-md:mt-10 max-md:max-w-">
          Lorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus. Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor orci cursus et a sapien integer faucibus. Turpis nisl condimentum consequat et nonLorem ipsum dolor sit amet consectetur. Sed laculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus. Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor orci cursus et a sapien integer faucibus. Turpis nisl condimentum consequat et nonLorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna. Imperdiet mauris et odio sem bibendum diam tincidunt nisl faucibus. Nunc curabitur aliquet convallis fermentum neque. Porttitor duis tortor.
        </p>
        <button className="justify-center self-start p-5 mt-20 text-2xl text-black whitespace-nowrap bg-zinc-300 max-md:mt-10">Learn More</button>
      </section>
    );
  }
  
  function LandingPage() {
    const imageSrcs = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e441412c8d4c95fdfe404f121blebb3de240cf039170472f7d86c72f7272005e?apiKey=160408c8f6b04722b33db66d69d4ca24&", alt: "Description of first major image", aspectRatio: "aspect-[1.49]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7170016df9afc55db23c32d64c425f0f0d8bcb2133b9aabf0486c650b09c459?apiKey=160408c8f6b04722b33db66d69d4ca248", alt: "Description of second image" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8562050d08ad813319cf25fd54b19eeb66ada54f36a24faa39f85991975a897?apiKey=160408c8f6b04722b33db66d69d4ca248", alt: "Description of third image" }
    ];
  
    return (
      <main className="flex flex-col justify-center bg-black">
        <header className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33cc37Bacd276b2014eca86f844e5f387e961196ds0de1199691ff8b024435e?apiKey=160408c8f6b04722b33db66d69d4ca248" className="object-cover absolute inset-0 size-full" alt="Main background image" />
          <div className="relative mt-44 mb-12 w-full max-w-[1611px] max-md:my-10 max-md:max-w-full">
            <section className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <ContentSection />
              </div>
              <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <section className="flex relative flex-col grow max-md:mt-10 max-md:max-w-full">
                  <ImageGalleryItem {...imageSrcs[0]} />
                  <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <ImageGalleryItem {...imageSrcs[1]} />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <ImageGalleryItem {...imageSrcs[2]} />
                      </div>
                    </div>
                  </div>
                </section>
              </aside>
            </section>
          </div>
        </header>
      </main>
    );
  }
  
//export default LandingPage;

// Contact Us Page Components

const ImageSection = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
  
  const ContactInfo = ({ label, type = "text", id }) => (
    <div className="justify-center items-start py-8 pr-16 pl-5 mt-7 whitespace-nowrap border border-white border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input type={type} id={id} placeholder={label} aria-label={label} className="bg-transparent w-full" />
    </div>
  );
  
  const FooterSection = ({ title, children }) => (
    <div className="flex flex-col text-2xl text-white max-md:mt-10">
      <div className="font-semibold">{title}</div>
      {children}
    </div>
  );
  
  const SocialMediaIcon = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className="aspect-square w-[69px]" />
  );
  
  function ContactPage() {
    return (
      <main className="flex flex-col justify-center bg-black">
        <section className="flex overflow-hidden relative flex-col items-center pt-12 w-full min-h-[1292px] max-md:max-w-full">
          <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/9436fc08637b8299e5400af76f521cc8397e0acc9e42318384986598b6261da4?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 justify-between mt-36 w-full text-xl font-semibold text-white max-w-[1625px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-end px-5 mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold max-md:max-w-full max-md:text-4xl"> Get in Touch </div>
              <ContactInfo label="Your Name" id="nameInput" />
              <ContactInfo label="Enter your email address" type="email" id="emailInput" />
            </div>
            <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/a887910e8a50e132545c35c9b3807df60374f7b8f0dc2d0731ef4e505f5d6adc?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="" className="w-full aspect-[1.33] max-md:max-w-full" />
          </div>
          <div className="flex relative gap-5 justify-between mt-8 w-full max-w-[1716px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 self-start text-xl font-semibold max-md:max-w-full">
              <div className="items-start pt-5 pr-16 pb-32 pl-5 text-white whitespace-nowrap border border-white border-solid max-md:pr-5 max-md:pb-10 max-md:max-w-full">
                <textarea placeholder="Message" aria-label="Message" className="bg-transparent w-full h-full"></textarea>
              </div>
              <button className="justify-center self-center px-14 py-5 mt-7 text-black bg-white max-md:px-5">Send</button>
            </div>
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/c11d99faf1e48fd5d046b70959b5e1e5376d6bc840be0706ffc1aa0f754cb7df?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="" className="w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/c329c718d4ee1136c6c15839899b5ac944449f6980d107def2dfc48e17f9dfd3?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="" className="grow mt-12 w-full aspect-[1.16] max-md:mt-10" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex relative flex-col justify-center self-stretch px-16 mt-20 w-full bg-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mr-14 ml-14 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 justify-between text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col my-auto text-base font-medium">
                    <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/810414d2681f9b57e261910a0885e9e3f5842f091e6cb9dfd6060dce68aa6b7b?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="E-lect logo" className="ml-3.5 aspect-square w-[118px] max-md:ml-2.5" />
                    <div className="mt-4">E-lect 2024<br />All rights reserved</div>
                  </div>
                  <div className="bg-white h-[236px] w-[3px]"></div>
                  <FooterSection title="ABOUT">
                    <div className="mt-9">Home</div>
                    <div className="mt-6">About us</div>
                    <div className="mt-7">Get in touch</div>
                  </FooterSection>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="mt-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <FooterSection title="FAQs">
                      <div className="mt-8">Verification process</div>
                      <div className="mt-5">Your Documents</div>
                    </FooterSection>
                    <FooterSection title="Customer Support">
                      <div className="mt-7">support@lectify.com</div>
                      <div className="mt-4">+91 9827312476</div>
                    </FooterSection>
                    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                      <div className="self-start ml-8 text-2xl font-semibold text-white whitespace-nowrap max-md:ml-2.5">Find Us On</div>
                      <div className="flex gap-5 justify-between mt-7">
                        <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c58df5037e38ea30d037c34043b232cec523f0457267d8b55e8af307b0753272?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Social media 1" />
                        <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b844f12c1d1798cfdaf97fe692a7798d9c89e353c8c699fc791726e9927fc36?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Social media 2" />
                        <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6fd6606d7f72a2bcf3615a24522a0f3dba0945474ee0fd4a88da2940eadf87f?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Social media 3" />
                        <SocialMediaIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1b13ba5d0fca3ff6bea62e7e62e0ae2359a80d97f65a723a155df785846d11?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Social media 4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    );
  }
  

// Profile Page 1

// Reusable Components
const ProfileHead = ({ mainTitle, subTitle, imgUrl, altText }) => (
    <div className="flex gap-5 justify-between items-start mt-28 mb-20 ml-10 max-md:flex-wrap max-md:my-10 max-md:max-w-full">
      <div className="flex flex-col mt-9 text-4xl basis-0">
        <div className="text-base font-bold">
          <h2 className="text-4xl ">{mainTitle}</h2>
          <h1 className="text-5xl">{subTitle}</h1>
        </div>
      </div>
      <img loading="lazy" src={imgUrl} alt={altText} className="rounded-full shadow-lg aspect-square w-[78px]" />
    </div>
  );
  
  const InfoSection = ({ title, content }) => (
    <div>
      <h3 className="mt-16 text-xl max-md:mt-10 max-md:max-w-full">{title}</h3>
      <p className="mt-6 text-xl max-md:max-w-full">{content}</p>
      <div className="shrink-0 mt-16 h-px bg-white max-md:mt-10 max-md:max-w-full" />
    </div>
  );
  
  const UserProfile = () => {
    return (
      <div className="flex flex-col justify-center font-semibold text-white bg-white">
        <header className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33cc378acd276b2014eca86f844e5f387e961196da0de1199691ff8b024435e?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Background profile" className="object-cover absolute inset-0 size-full" />
          <section>
            <ProfileHeader mainTitle="Your" subTitle="Profile" imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/79c525c7d6c2481f8d687039f5d8329b35c432483757db327cc8c0f68ccf3215?apiKey=160408c8f6b04722b33db66d69d4ca24&" altText="Profile Picture" />
            <div className="flex relative gap-5 justify-start items-start ml-10 max-md:flex-wrap max-md:my-10 max-md:max-w-full">
              <article className="flex flex-col flex-1 mt-14 max-md:mt-10 max-md:max-w-full">
                <InfoSection title="Personal Info" content="Details" />
                <InfoSection title="Address" content="Address Line 1 Lorem ipsum dolor sit amet consectetur. Sed iaculis metus adipiscing urna." />
                <InfoSection title="Phone" content="+91 8465197849" />
                <InfoSection title="Email" content="pradeepkumar@gmail.com" />
              </article>
            </div>
          </section>
        </header>
      </div>
    );
  };
  
  //export default UserProfile;
  
  // Profile Page 2
  
  import React from 'react';
  
  const ProfileHeader = ({ children }) => (
    <header className="flex flex-col mt-9 text-4xl font-bold text-white basis-0">
      {children}
    </header>
  );
  
  const PersonalDetail = ({ imageSrc, altText, detail, className }) => (
    <div className={`${className} flex gap-5 justify-between text-5xl font-semibold whitespace-nowrap`}>
      <img loading="lazy" src={imageSrc} alt={altText} className="rounded-full shadow-lg aspect-square w-[78px]" />
      <div className="flex-auto my-auto">{detail}</div>
    </div>
  );
  
  const ProfileSection = () => (
    <section className="flex flex-col flex-1 mt-14 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-xl font-semibold text-white max-md:max-w-full">Registered Pan</h2>
      <div className="mt-7 max-w-full w-[480px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a37383a2ee7d9625ff8724ab9c15d05806ff98c3a1df72a34d760869430d2c?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Personal Document" className="grow w-full aspect-[1.54] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <span className="self-stretch my-auto text-3xl font-semibold text-white max-md:mt-10">AM*******3H</span>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-7 h-px bg-white max-md:max-w-full"></div>
      <h2 className="mt-8 text-xl font-semibold text-white max-md:max-w-full">Registered Pan</h2>
      <div className="mt-4 max-w-full w-[512px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1e05467391ac526225c64bc20da5291243bb0842992b3098df081be9dbeeca?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Secondary Personal Document" className="grow w-full aspect-[1.52] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <span className="self-stretch my-auto text-3xl font-semibold text-white whitespace-nowrap max-md:mt-10">774* **** *615</span>
          </div>
        </div>
      </div>
    </section>
  );
  
  const ProfilePage = () => (
    <main className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33cc378acd276b2014eca86f844e5f387e961196da0de1199691ff8b024435e?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Background" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative gap-5 justify-between items-start mt-28 mb-20 w-full max-w-[1641px] max-md:flex-wrap max-md:my-10 max-md:max-w-full">
          <ProfileHeader>
            <p className="text-base">
              <span>Your</span><br />
              <span>Profile</span>
            </p>
            <PersonalDetail imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/79c525c7d6c2481f8d687039f5d8329b35c432483757db327cc8c0f68ccf3215?apiKey=160408c8f6b04722b33db66d69d4ca24&" altText="User Profile" detail="Name" className="mt-24 max-md:mt-10 max-md:text-4xl" />
            <h3 className="mt-20 whitespace-nowrap max-md:mt-10">Personal Info</h3>
            <h4 className="mt-14 max-md:mt-10">Details</h4>
          </ProfileHeader>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4da6e3dbbfa661488b7b11ef435769da6c3aff21da2f28111c3d3648a04a56ea?apiKey=160408c8f6b04722b33db66d69d4ca24&" alt="Design Element" className="self-stretch aspect-[0.01] stroke-[5px] stroke-white w-[5px]" />
          <ProfileSection />
        </div>
      </div>
    </main>
  );
  
  export default ProfilePage;  