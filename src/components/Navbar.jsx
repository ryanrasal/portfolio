import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ handleChangeDarkMode, themeDark }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` w-full md:justify-end justify-center z-1000 flex flex-wrap transition-all duration-300 ${
        scrolling
          ? " text-black bg-white h-12 shadow-md fixed top-0 items-center"
          : "fixed top-10"
      }`}
    >
      <ul className="flex font-bold text-xl justify-around mr-10">
        <li className="md:mx-6 mx-3 hover:border-b cursor-pointer">
          Qui suis-je ?
        </li>
        <li className="md:mx-6 mx-3 hover:border-b cursor-pointer">Projets</li>
        <li className="md:mx-6 mx-3 hover:border-b cursor-pointer">Contact</li>
        <button className="" onClick={() => handleChangeDarkMode()}>
          {themeDark ? <Sun /> : <Moon />}
        </button>
      </ul>
    </nav>
  );
}
