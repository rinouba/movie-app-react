import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import SearchBar from "./SearchBar";
import DropDown from ".//DropDown";
// class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
function NavBar() {
  return (
    <>
      <div className="dark:bg-gray-800 bg-slate-100">
        <div className="w-3/4 m-auto">
          <nav>
            <div className="flex lg:justify-between md:flex-row flex-col items-center pt-4 pb-4 ">
              <DropDown />
              <SearchBar />
              <ToggleDarkMode />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
