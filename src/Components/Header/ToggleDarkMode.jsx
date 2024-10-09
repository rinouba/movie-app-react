import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function ToggleDarkMode() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="text-black dark:text-gray-200 scale-150 ps-0 md:ps-5">
      <button onClick={() => darkModeHandler()}>
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </div>
  );
}

export default ToggleDarkMode;
