import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import ProjetsGroupes from "./pages/ProjetsGroupes";

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
        className={themeDark ? "bg-black text-white" : "bg-white text-black"}
      >
        <ProjetsGroupes />
      </div>
    </div>
  );
}
