function App() {
  const DownArrowComp = ({ className }) => {
    return (
      <svg
        className={`h-10 w-10 animate-pulse text-white ${className}`}
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
      class="cursor-pointer rounded-lg border-b-[4px] border-gray-600 bg-gray-500 px-6 py-2
        text-white transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110
        active:translate-y-[2px] active:border-b-[2px] active:brightness-90"
    >
      {children}
    </button>
  );

  const HeaderNavigationButton = ({ children, targetId }) => (
    <button
      type="button"
      className="flex h-full w-1/4 items-center justify-center rounded-md text-[1.5vh] transition
        hover:bg-blue-300"
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

  const FooterButton = ({ img, path }) => (
    <a
      href={path}
      download="NGAIDikHong_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative cursor-pointer overflow-hidden rounded-full border border-white/10
        bg-gradient-to-tr from-black/60 to-black/40 p-5 shadow-lg backdrop-blur-lg transition-all
        duration-300 ease-out hover:scale-110 hover:rotate-3 hover:border-white/30
        hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 hover:shadow-2xl
        hover:shadow-white/20 active:scale-95 active:rotate-0`}
    >
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10
          to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      ></div>
      <div className="relative z-10">{img}</div>
    </a>
  );

  const CustomSection = ({ children, className, id }) => (
    <section id={id} className={`h-full w-full snap-start pt-10 ${className}`}>
      {children}
    </section>
  );

  return (
    <>
      {/* Fixed header for navigation */}
      <div
        className="fixed top-0 left-0 z-50 flex h-1/12 w-full items-center bg-black/50 px-[5%]
          text-white backdrop-blur-lg"
      >
        <div className="flex w-1/2 items-center justify-center text-[0.7rem]">
          <HeaderMainButton>❚█══Derek NGAI══█❚</HeaderMainButton>
        </div>

        <div className="flex h-full w-1/2 items-center justify-between py-2">
          {/* HeaderNavigationButtons now link to specific section IDs */}
          <HeaderNavigationButton targetId={"about-section"}>About</HeaderNavigationButton>
          <HeaderNavigationButton targetId={"projects-section"}>Project</HeaderNavigationButton>
          <HeaderNavigationButton targetId={"resume-section"}>Resume</HeaderNavigationButton>
          <HeaderNavigationButton targetId={"contact-section"}>Contact</HeaderNavigationButton>
        </div>
      </div>

      {/* Main scroll container */}
      <div
        className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-gradient-to-br
          from-[#121212] to-[#242424] px-[10%]"
      >
        <div className="h-full w-full">
          {/* Hero Section */}
          <CustomSection id={"hero-section"} className="flex flex-col items-center justify-center">
            <div className="flex h-2/3 flex-col items-center justify-center text-[12vw] text-white">
              Hej! Welcome!
            </div>
            <DownArrowComp />
          </CustomSection>

          {/* About Section */}
          <CustomSection id={"about-section"} className={"flex flex-col justify-center"}>
            <div className="flex h-2/3 w-2/3 flex-col items-start justify-center text-white">
              <h1 className="text-[8vw]">Who am I?</h1>
              <p className="text-[2vw]">
                I’m Derek Ngai, a front-end developer graduating in August 2025. Passionate about
                building responsive, user-focused web experiences, I’m excited to collaborate and
                create innovative solutions.
              </p>
            </div>

            <div className="flex justify-center">
              <DownArrowComp />
            </div>
          </CustomSection>

          {/* Contact Section */}
          <CustomSection
            id={"contact-section"}
            className="flex snap-start flex-col items-center justify-center pb-[10%]"
          >
            <div className="flex h-3/4 flex-col items-center justify-center gap-[5vh] text-white">
              <p className="text-[6vh]">Looking for a Front-end Developer?</p>
              <button
                className="group relative w-1/2 cursor-pointer overflow-hidden rounded-md border
                  border-b-4 border-red-400 bg-red-950 px-4 py-2 font-medium text-red-400
                  duration-300 outline-none hover:border-t-4 hover:border-b hover:brightness-150
                  active:opacity-75"
              >
                <span
                  className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md
                    bg-red-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-red-400
                    duration-500 group-hover:top-[150%]"
                />
                <a href="mailto:derekngai.dnw@gmail.com" className="text-[4vh]">
                  GET IN TOUCH
                </a>
              </button>
            </div>

            <div className="flex h-1/4 w-full flex-col items-start justify-between">
              <div className="flex gap-[2vh]">
                <FooterButton
                  path={"../public/Resume.pdf"}
                  img={
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
                <FooterButton
                  path={"https://github.com/DerekNGAI"}
                  img={
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>github [#142]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-140.000000, -7559.000000)"
                          fill="#FFFFFF"
                        >
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                              id="github-[#142]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                />
                <FooterButton
                  path={"https://www.linkedin.com/in/derek-ngai-5a5b982b8/"}
                  img={
                    <svg
                      height="50px"
                      width="50px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 382 382"
                      xmlSpace="preserve"
                    >
                      <path
                        style={{ fill: "#0077B7" }}
                        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                  L341.91,330.654L341.91,330.654z"
                      />
                    </svg>
                  }
                />
              </div>

              <p className="text-[2vh] text-white">© 2025 Derek NGAI</p>
            </div>
          </CustomSection>
        </div>
      </div>
    </>
  );
}

export default App;
