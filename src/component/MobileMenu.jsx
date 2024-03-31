import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <div className="flex flex-col justify-center  items-center space-y-3 ">
      <input
        placeholder="search here"
        className="rounded-md border-spacing-2 border-2 px-2 w-44"
        type="text"
        name=""
        id=""
      />
      <select
        className="w-44 text-center border-spacing-2 border-2 rounded-md "
        name="cars"
        id="cars"
      >
        <option value="volvo">Default</option>
        <option value="saab">Title</option>
        <option value="mercedes">Price</option>
        <option value="audi">Ratting</option>
      </select>
      <Link
        to={"/"}
        className="bg-red-400 w-44 text-white text-center rounded-md"
      >
        Home
      </Link>
      <button className="bg-red-400 w-44 text-white rounded-md">LogOut</button>
    </div>
  );
}
// absolute top-24 right-10
