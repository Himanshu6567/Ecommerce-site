import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Loading from "../component/Loading";
import { ProductContext } from "../Context/ProductContext";

const ProductDetail = () => {
  let { id } = useParams();

  const { products } = useContext(ProductContext);

  const { addToCart, decrimentAmount, incrimentAmount } =
    useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Loading />
      </section>
    );
  }
  const { title, price, description, thumbnail } = product;

  return (
    <div>
      <section className="py-16 lg:py-32  flex items-center">
        <div className="  container mx-auto ">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className=" max-w-[300px] lg:max-w-sm"
                src={thumbnail}
                alt="image "
              />
            </div>
            <div className="  flex-1 text-center lg:text-left ">
              <h1 className="text-[26px] lg:mx-0 font-medium mb-2 max-w-[450px] mx-auto">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6 ">
                ${price}
              </div>
              <p className="mb-4">{description}</p>

              {/* <div className=" flex justify-center items-center space-x-3 mb-3">
                <button>
                  <AiOutlineMinusCircle
                    onClick={() => decrimentAmount(item.id)}
                    className="text-red-500 cursor-pointer"
                  />
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  // value={quantity}
                ></input>
                <button>
                  <AiOutlinePlusCircle
                    onClick={() => incrimentAmount(id)}
                    className="text-red-500 cursor-pointer"
                  />
                </button>
              </div> */}

              <button
                onClick={() => {
                  addToCart(product, product.id);
                }}
                className=" bg-red-400 py-2 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
