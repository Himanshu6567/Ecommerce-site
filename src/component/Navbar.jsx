import React, { useContext, useState } from "react";
import shop2 from "/public/shop2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const { setQuary, setSortOption } = useContext(ProductContext);
  const { itemAmount } = useContext(CartContext);

  const GiHamburgerClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="h-20 flex justify-between items-center px-10">
        <div className="flex justify-center space-x-3 items-center">
          <Link to={"/"}>
            <img className="h-12" src={shop2} alt="shop logo" />
          </Link>
          <div className="hidden sm:flex space-x-4 ">
            <Link to={"/"}>Home</Link>
            <h1>Link</h1>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 md:ml-8">
          <select
            defaultValue={"default"}
            onChange={(e) => {
              setSortOption(e.target.value);
            }}
            className="w-36 text-center border-2 hidden sm:block md:inline-block"
            name="cars"
            id="cars"
          >
            <option value="default">Default</option>
            <option value="title">Title</option>
            <option value="hToL">High To Low</option>
            <option value="LToH">Low To High</option>
            <option value="rating">Rating</option>
          </select>
          <div className="hidden sm:flex">
            <input
              onChange={(e) => {
                setQuary(e.target.value);
              }}
              placeholder="search here"
              className="rounded-md border-spacing-2 border-2 px-2 w-44"
              type="text"
              name=""
              id=""
            />
          </div>
          <Link to={"cart"} className="flex">
            <AiOutlineShoppingCart className="text-4xl" />
            <span className="bg-red-400 text-white rounded-full text-sm h-5 w-5 flex justify-center items-center -ml-3">
              {itemAmount}
            </span>
          </Link>
          <GiHamburgerMenu
            onClick={GiHamburgerClick}
            className="text-3xl md:hidden cursor-pointer"
          />
        </div>
      </div>
      {menu && <MobileMenu />}
    </div>
  );
}
