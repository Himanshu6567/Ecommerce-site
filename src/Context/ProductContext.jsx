import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [quarry, setQuary] = useState("");
  const [sortOption, setSortOption] = useState("title");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    fetch(url)
      .then((response) => {
        console.log("pd", response);
        return response.json();
      })
      .then((data) => {
        let mainData = data.products;
        setProducts(mainData);
      });
  }, []);

  useEffect(() => {
    let url = "https://dummyjson.com/products/products/search?q=Laptop";
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        let mai = data.products;
        console.log(mai);
      });
  }, []);

  // console.log(products);
  // let products = pdt.filter((user) =>
  //   user.title.toLowerCase().includes(quarry)
  // );

  // const products = data.slice().sort((a, b) => {
  //   if (sortOption === "title") {
  //     return a.title.localeCompare(b.title);
  //   } else if (sortOption === "hToL") {
  //     return b.price - a.price;
  //   } else if (sortOption === "LToH") {
  //     return a.price - b.price;
  //   } else if (sortOption === "rating") {
  //     return b.rating - a.rating;
  //   }
  // });

  return (
    <ProductContext.Provider value={{ products, setQuary, setSortOption }}>
      {children}
    </ProductContext.Provider>
  );
}
