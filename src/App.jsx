import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [themeDark, setThemeDark] = useState(true);

  const handleChangeDarkMode = () => {
    setThemeDark(!themeDark);
  };
  return (
    <div className="bg-black">
      <Navbar
        handleChangeDarkMode={handleChangeDarkMode}
        themeDark={themeDark}
      />
    </div>
  );
}
