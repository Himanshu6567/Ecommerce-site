import React, { useContext, useState } from "react";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AlertContext } from "../Context/AlertContext";
import { CartContext } from "../Context/CartContext";

export default function Product({ data }) {
  const [hover, setHover] = useState(false);
  const { setAlert, showAlert } = useContext(AlertContext);
  const { addToCart } = useContext(CartContext);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleAddClick = () => {
    addToCart(data, data.id);

    setAlert(true);
    showAlert({
      mgs: "Produtct added seccesfully",
      alertype: "success",
    });

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  let id = data.id;

  return (
    <div
      className="border w-52 pb-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between ">
        {hover && (
          <Link className="absolute " to={`/product/${id}`}>
            <AiFillEye className="text-red-600 text-2xl cursor-pointer" />
          </Link>
        )}
        <img className="h-36 w-full" src={data.thumbnail} alt="" />
        {hover && (
          <AiOutlinePlus
            onClick={handleAddClick}
            className="text-red-600 text-2xl -ml-9 cursor-pointer  "
          />
        )}
      </div>
      <div className="space-y-2 px-4 py-2">
        <div className="flex justify-between">
          <div className="font-bold">{data.title}</div>
          <div className="text-gray-600">${data.price}</div>
        </div>
        <div className="text-gray-600">Brand/{data.brand}</div>
        <p className="text-sm">Rating: {data.rating}</p>
      </div>
    </div>
  );
}
