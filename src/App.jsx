import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import ProjetsGroupes from "./pages/ProjetsGroupes";
import ProjetSolo from "./pages/ProjetSolo";
import WhoIAm from "./pages/WhoIAm";

export default function App() {
  const [themeDark, setThemeDark] = useState(true);

  const handleChangeDarkMode = () => {
    setThemeDark(!themeDark);
  };
  return (
    <div className="text-white">
      <Navbar
        handleChangeDarkMode={handleChangeDarkMode}
        themeDark={themeDark}
      />
      <Header />
      <div
        className={
          themeDark
            ? "bg-black transition-all duration-300  text-white"
            : "bg-white transition-all duration-300  text-black"
        }
      >
        <WhoIAm />
        <ProjetsGroupes />
        <ProjetSolo />
      </div>
    </div>
  );
}
