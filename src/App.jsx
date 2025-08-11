import downArrow from "./assets/downArrow.png";

function App() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
      <div className="absolute flex h-1/12 w-full items-center text-white">
        <div className="flex w-1/2 items-center justify-center text-[4vw]">
          ❚█══Derek NGAI══█❚
        </div>

        <div className="flex h-full w-1/2 items-center justify-between py-2">
          <button className="flex h-full w-1/4 items-center justify-center rounded-md text-[2vw] transition hover:bg-blue-300">
            About
          </button>
          <button className="flex h-full w-1/4 items-center justify-center rounded-md text-[2vw] transition hover:bg-blue-300">
            Project
          </button>
          <button className="flex h-full w-1/4 items-center justify-center rounded-md text-[2vw] transition hover:bg-blue-300">
            Resume
          </button>
          <button className="flex h-full w-1/4 items-center justify-center rounded-md text-[2vw] transition hover:bg-blue-300">
            Contact
          </button>
        </div>
      </div>

      <div>
        <section className="flex h-screen snap-start flex-col items-center justify-center">
          <div className="flex h-2/3 flex-col items-center justify-center text-[15vw] text-white">
            Welcome
          </div>
          <img
            className="w-[10%] animate-pulse brightness-0 invert filter"
            src={downArrow}
            alt=""
          />
        </section>

        <section className="flex h-screen snap-start flex-col items-start justify-center text-white">
          <h1 className="text-[15vw]">Derek NGAI</h1>
          <p>
            I’m Derek Ngai, a front-end developer graduating in August 2025.
            Passionate about building responsive, user-focused web experiences,
            I’m excited to collaborate and create innovative solutions.
          </p>
        </section>

        <section className="flex h-screen snap-start items-center justify-center text-6xl text-white">
          Center of Roads
        </section>
      </div>
    </div>
  );
}

export default App;
