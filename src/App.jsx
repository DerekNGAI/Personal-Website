import { useState } from "react";

import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import useTheme from "./useTheme";

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const DownArrowComp = ({ className }) => {
    return (
      <svg
        className={`h-10 w-10 animate-pulse ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 16.0002L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
      </svg>
    );
  };

  const HeaderMainButton = ({ children }) => (
    <button
      className="cursor-pointer rounded-lg border-b-[4px] border-gray-600 bg-gray-500 px-6 py-2
        text-white transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110
        active:translate-y-[2px] active:border-b-[2px] active:brightness-90"
      onClick={() => {
        const targetElement = document.getElementById("hero-section");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
    >
      {children}
    </button>
  );

  const HeaderNavigationButton = ({ children, targetId }) => (
    <button
      type="button"
      className="flex h-full w-1/4 items-center justify-center rounded-md text-sm transition
        hover:bg-[#7F8CAA]"
      onClick={() => {
        // Use standard JavaScript to smoothly scroll to the element with the matching ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
    >
      {children}
    </button>
  );

  const CustomSection = ({ children, className, id }) => (
    <section id={id} className={`h-full w-full snap-start overflow-hidden ${className} pt-[10vh]`}>
      {children}
    </section>
  );

  const ColorModeButton = () => (
    <button
      type="button"
      className="h-10 w-10 rounded-full border-2 hover:bg-transparent active:translate-y-[2px]
        active:border-b-[2px] active:brightness-90"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#EAEFEF"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <svg fill="#000000" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>light</title>{" "}
            <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path>{" "}
          </g>
        </svg>
      )}
    </button>
  );

  const ProjectCard = ({ name, year, description, techStack }) => {
    // const [isExpanded, setIsExpanded] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const toggleCard = () => {
      // setIsExpanded(!isExpanded);
      setIsRotated(!isRotated);
    };

    const generateTechStack = (techStack) => {
      return (
        <div className="flex flex-wrap items-center gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-secondary dark:bg-dark rounded-2xl px-2 py-1 text-[10px]"
            >
              {tech}
            </span>
          ))}
        </div>
      );
    };

    return (
      <div
        className={`relative h-full min-h-[150px] w-full min-w-[150px] transition-all duration-500
          transform-3d ${isRotated ? "rotate-y-180" : ""} max-h-[400px] max-w-[400px]`}
      >
        {/* Front Side */}
        <div
          className="bg-primary shadow-primary dark:shadow-secondary dark:bg-primary absolute
            inset-0 flex h-full w-full flex-col justify-between rounded-2xl p-8 transition-all
            duration-300 ease-out backface-hidden hover:shadow-lg"
          onClick={toggleCard}
        >
          <div className="flex h-4/5 w-full flex-col gap-2 pb-6">
            <p className="text-base">{name}</p>
            <p className="text-xs font-bold">{year}</p>
            <p className="overflow-scroll text-xs">{description}</p>
          </div>
          <div>{generateTechStack(techStack)}</div>
        </div>

        {/* Back Side */}
        <div
          className="bg-primary absolute inset-0 h-full w-full rotate-y-180 rounded-2xl p-4
            backface-hidden"
        >
          <button
            type="button"
            onClick={toggleCard}
            className="bg-secondary dark:bg-dark rounded-2xl px-2 py-1 text-sm hover:brightness-75"
          >
            GO Back
          </button>
          <p className="flex h-4/5 w-full items-center justify-center text-4xl">Coming Soon!</p>
        </div>
      </div>
    );
  };

  return (
    <div className={"text-dark dark:text-light snap-y snap-mandatory overflow-y-scroll"}>
      {/* Fixed header for navigation */}
      <div
        className="from-light/50 dark:from-dark/50 fixed top-0 left-0 z-50 flex h-[10vh] w-full
          min-w-[350px] items-center bg-gradient-to-br to-[#b6bebe]/50 px-[5%] backdrop-blur-lg
          dark:to-[#181921]/50"
      >
        <div className="flex w-1/2 items-center justify-center text-xs">
          <HeaderMainButton>❚█══Derek NGAI══█❚</HeaderMainButton>
        </div>

        <div className="flex h-full w-1/2 items-center justify-between py-2">
          <HeaderNavigationButton targetId={"about-section"}>About</HeaderNavigationButton>
          <HeaderNavigationButton targetId={"project-section"}>Project</HeaderNavigationButton>
          <HeaderNavigationButton targetId={"contact-section"}>Contact</HeaderNavigationButton>
        </div>
      </div>

      {/* Main scroll container */}
      <div className="mx-auto h-screen w-screen max-w-4xl px-[10%]">
        <div className="h-full w-full">
          {/* Hero Section */}
          <CustomSection id={"hero-section"} className="flex flex-col items-center justify-center">
            <HeroSection />
            <DownArrowComp />
          </CustomSection>

          {/* About Section */}
          <CustomSection id={"about-section"}>
            <AboutSection />

            <div className="flex justify-center">
              <DownArrowComp />
            </div>
          </CustomSection>

          {/* Project Section */}
          <CustomSection id={"project-section"}>
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
              <p className="text-4xl">Latest Works</p>
              <div
                className="grid h-full w-full grid-cols-1 items-center justify-items-center gap-4
                  self-center md:grid-cols-2"
              >
                <ProjectCard
                  name={"Simple Movie Website"}
                  year={"2025"}
                  description={
                    "A dynamic movie search website that allows users to explore films using the TMDB API for real-time data retrieval. All user searches are logged in an Appwrite database, enabling the platform to showcase trending movies based on the most frequently searched titles."
                  }
                  techStack={["ReactJS", "Tailwincss", "Vite", "Appwrite"]}
                />
                <ProjectCard
                  name={"Simple Movie App"}
                  year={"2025"}
                  description={
                    'Similar to "Simple Movie Website", but in React Native and with an additional movie detail page. '
                  }
                  techStack={["React Native", "Typescript", "TailwindCSS", "EXPO", "Appwrite"]}
                />
                {/* <ProjectCard
                  name={"Simple Movie App"}
                  year={"2025"}
                  description={"This is just a simple web app"}
                  techStack={["Nothing", "ReactJS", "TailwindCSS", "Vite", "Appwrite"]}
                /> */}
              </div>
            </div>
          </CustomSection>

          {/* Contact Section */}
          <CustomSection
            id={"contact-section"}
            className="flex snap-start flex-col items-center justify-center pb-[6vh]"
          >
            <ContactSection />
          </CustomSection>
        </div>
      </div>

      {/* Button for Color Light/Dark Mode */}
      <div className="fixed right-4 bottom-4">
        <ColorModeButton />
      </div>
    </div>
  );
}

export default App;
