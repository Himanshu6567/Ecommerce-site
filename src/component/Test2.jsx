import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { CgCornerUpLeft, CgCornerUpRight } from "react-icons/cg";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { withCart } from "./withProvider";

function ProductDetails({ AddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      getProductData(id)
        .then(function (product) {
          setProduct(product);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    AddToCart(id, count);
  }
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {product && (
        <div>
          <Link
            class="text-2xl flex items-center w-24 py-1 rounded hover:bg-green-200 m-2"
            to="/"
          >
            <TbArrowBackUp /> HOME
          </Link>
          <div class="sm:flex bg-white p-5  ">
            <div class=" aspect-square md:h-96 mb-2.8 mx-5">
              <img class="h-full w-full" src={product.thumbnail} />
            </div>
            <div class="flex flex-col px-6">
              <div>
                HOME/{product.category}/{product.title}
              </div>
              <h1 class="mt-3 text-3xl ">{product.title}</h1>
              <h1 class="text-gray-500 mt-2 text-xl">₹{product.price}</h1>
              <p class=" mt-2">{product.description}</p>

              <div class="flex gap-x-2 mt-4">
                <input
                  value={count}
                  onChange={handleCountChange}
                  class=" w-10 border-solid border-2 border-primary-light rounded"
                  type="number"
                />

                <button
                  onClick={handleButtonClick}
                  class=" bg-primary-default px-3 rounded drop-shadow-xl text-white hover:bg-primary-dark"
                >
                  ADD TO CART
                </button>
              </div>

              <hr class="mt-4"></hr>
              <hr></hr>
              <hr></hr>

              <div>
                Rating: <span class="text-yellow-600">{product.rating}</span>
              </div>
              <p class="mt-2">
                Category :
                <span class="text-primary-dark"> {product.category}</span>
              </p>
            </div>
          </div>

          <div class="flex justify-between px-3 my-6">
            <div>
              {id > 1 && (
                <Link
                  class="text-xl flex items-center hover:bg-primary-default bg-green-100 px-3 py-2 rounded drop-shadow-xl"
                  to={"/ProductDetails/" + (id - 1)}
                >
                  <CgCornerUpLeft />
                  PERIOUS
                </Link>
              )}
            </div>
            <div>
              <Link
                class="text-xl flex item

s-center  hover:bg-primary-default bg-green-100 px-3 py-2 rounded drop-shadow-xl"
                to={"/ProductDetails/" + (id + 1)}
              >
                <CgCornerUpRight />
                NEXT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default withCart(ProductDetails);
