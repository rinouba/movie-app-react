"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

function DropDown() {
  return (
    <div className="md:me-5 me-0 lg:me-0">
      <Dropdown label="Menu" dismissOnClick={false}>
        <Link to="/">
          <Dropdown.Item>Home</Dropdown.Item>
        </Link>

        <Link to="favorite">
          <Dropdown.Item>Favorites</Dropdown.Item>
        </Link>
      </Dropdown>
    </div>
  );
}

export default DropDown;
