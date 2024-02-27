import { useEffect, useState } from "react";
import { PiSunLight } from "react-icons/pi";
import { BsMoonStars } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const html = document.querySelector("body");
    if (html) {
      if (isDarkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode} className="delay-150 duration-500 ">
      {isDarkMode ? (
        <PiSunLight size={24} color="yellow" strokeWidth={5} />
      ) : (
        <BsMoonStars size={24} color="silver" />
      )}
    </button>
  );
};

export default ThemeToggle;
