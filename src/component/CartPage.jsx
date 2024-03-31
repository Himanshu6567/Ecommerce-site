import React, { useContext } from "react";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import CartEmpty from "../component/CartEmpty";

export default function CartPage() {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length == 0) {
    return <CartEmpty />;
  }

  return (
    <div>
      <div className=" flex justify-center items-center flex-col">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex justify-center  items-center mt-16">
        <div className=" w-64 space-y-4 border shadow-lg mb-6 ">
          <div className=" flex  border justify-between items-center ">
            <div className=" px-4">
              <h1>Total : ${total}</h1>
            </div>
            <div className="w-8 h-8 bg-red-400 flex  hover:bg-red-600 justify-center items-center">
              <FiTrash2 onClick={clearCart} className="text-white" />
            </div>
          </div>
          <div className=" space-y-3">
            <button className="w-full bg-gray-300 py-1 hover:bg-gray-400 text-white">
              view Cart
            </button>
            <button className="w-full bg-gray-600  hover:bg-gray-500 py-1 text-white">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
