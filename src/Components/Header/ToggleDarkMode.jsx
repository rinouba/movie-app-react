import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function ToggleDarkMode() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className="text-black dark:text-gray-200 scale-150 ps-0 md:ps-5">
      <button onClick={() => toggleDarkMode()}>
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </div>
  );
}

export default ToggleDarkMode;
