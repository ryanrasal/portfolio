import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import ProjetsGroupes from "./pages/ProjetsGroupes";
import ProjetSolo from "./pages/ProjetSolo";
import WhoIAm from "./pages/WhoIAm";
import Form from "./pages/Form";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [themeDark, setThemeDark] = useState(false);

  const handleChangeDarkMode = () => {
    setThemeDark(!themeDark);
  };
  return (
    <Router>
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
          <Form />
        </div>
      </div>
    </Router>
  );
}
