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
      className={` w-full justify-end flex transition-all duration-300 ${
        scrolling ? " text-black h-12 fixed top-0 items-center" : "fixed top-10"
      }`}
    >
      <ul className="flex font-bold text-xl justify-around mr-10">
        <li className="mx-6 hover:border-b cursor-pointer">Qui suis-je ?</li>
        <li className="mx-6 hover:border-b cursor-pointer">Projets</li>
        <li className="mx-6 hover:border-b cursor-pointer">Contact</li>
        <button className="" onClick={() => handleChangeDarkMode()}>
          {themeDark ? <Sun /> : <Moon />}
        </button>
      </ul>
    </nav>
  );
}
