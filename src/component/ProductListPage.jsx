import React, { useContext } from "react";
import NotMatching from "./NotMatching";
import Product from "./Product";
import { ProductContext } from "../Context/ProductContext";
import Loading from "./Loading";

export default function ProductListPage() {
  const { products } = useContext(ProductContext);

  // if (products.length == 0) {
  //   return <Loading />;
  // } else
  return (
    <div className="py-10 ">
      <div className="max-w-7xl mx-auto px-8 py-8 sm:px-6 lg:px-8">
        <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Products
        </div>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Here are some of the most popular products..
        </p>
      </div>
      <div className="  flex flex-wrap  gap-16 justify-center items-center">
        {products.map((data) => {
          return (
            <div key={data.id}>
              <Product data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
