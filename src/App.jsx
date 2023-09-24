import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";

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
      <div className="bg-black text-white"></div>
    </div>
  );
}
