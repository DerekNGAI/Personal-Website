import { useState, useEffect } from "react";
import downArrow from "./assets/downArrow.png";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-black">
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

      <section className="flex h-screen snap-start items-center justify-center text-6xl text-white">
        Name
      </section>

      <section className="flex h-screen snap-start items-center justify-center text-6xl text-white">
        Center of Roads
      </section>
    </div>

    // <div className='bg-black min-h-screen min-w-screen text-white'>
    //   {/* This div will change opacity based on scroll */}
    //   <div
    //     className="h-screen flex justify-center items-center text-4xl"
    //     style={{ opacity: Math.max(0, 1 - scrollY / 500) }}
    //   >
    //     Scroll down to see changes!
    //   </div>

    //   {/* This div will appear after scrolling down */}
    //   <div
    //     className={`h-screen flex justify-center items-center text-4xl transition-colors duration-500 ease-in-out ${
    //       scrollY > 500 ? 'bg-blue-900' : 'bg-transparent'
    //     }`}
    //   >
    //     {scrollY > 500 ? (
    //       <p>You've scrolled past 500px!</p>
    //     ) : (
    //       <p>Keep scrolling...</p>
    //     )}
    //   </div>

    //   {/* This div ensures there's enough scrollable content */}
    //   <div className='h-screen flex justify-center items-center text-4xl'>
    //     <p>More content below!</p>
    //   </div>
    // </div>
  );
}

export default App;
