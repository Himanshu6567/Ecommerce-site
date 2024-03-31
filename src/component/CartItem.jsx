import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { CartContext } from "../Context/CartContext";

export default function CartItem({ item }) {
  const { incrimentAmount, decrimentAmount, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="w-96  border-2">
      <div className="flex justify-between items-center ">
        <img className="w-28 h-16" src={item.thumbnail} alt="" />
        <div>
          <div className="flex  space-x-5 justify-center items-center">
            <h1>{item.title}</h1>
            <span>
              <IoMdClose
                onClick={() => removeFromCart(item.id)}
                className="hover:text-white rounded-full hover:bg-red-500 text-red-500"
              />
            </span>
          </div>

          <div className=" flex justify-center items-center space-x-3  mt-3">
            <button>
              <AiOutlineMinusCircle
                onClick={() => decrimentAmount(item.id)}
                className="text-red-500 cursor-pointer"
              />
            </button>
            <span>{item.amount}</span>
            <button>
              <AiOutlinePlusCircle
                onClick={() => incrimentAmount(item.id)}
                className="text-red-500 cursor-pointer"
              />
            </button>
          </div>
          <div className="flex justify-between px-3">
            <h1 className="text-gray-400">${item.price}</h1>
            <h1 className="text-gray-400">${item.price * item.amount}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
