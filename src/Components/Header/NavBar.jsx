import React from 'react'
import ToggleDarkMode from './ToggleDarkMode';
import SearchBar from "./SearchBar";
import DropDown from ".//DropDown";

function NavBar() {
  return (
    <>
        <div className="dark:bg-gray-800 bg-slate-100">
          <div className="w-3/4 m-auto">
            <nav>
              <div className="flex justify-between items-center pt-4 pb-4 ">
                  <DropDown />
                  <SearchBar />
                  <ToggleDarkMode/>
              </div>
            </nav>
          </div>
        </div>
    </>
  )
}

export default NavBar