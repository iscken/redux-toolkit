import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/BasketSlice";

const ProductsCart = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <img
            className=" rounded-t-lg w-[150px] h-[200px] mx-[100px]"
            src={el.image}
            alt="product image"
          />
        </div>

        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {el.name}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <div
                className="stars"
                style={{ background: el.rating >= 1 ? "yellow" : "gray" }}
              ></div>
              <div
                className="stars"
                style={{ background: el.rating >= 2 ? "yellow" : "gray" }}
              ></div>
              <div
                className="stars"
                style={{ background: el.rating >= 3 ? "yellow" : "gray" }}
              ></div>
              <div
                className="stars"
                style={{ background: el.rating >= 4 ? "yellow" : "gray" }}
              ></div>
              <div
                className="stars"
                style={{ background: el.rating >= 5 ? "yellow" : "gray" }}
              ></div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {el.rating}.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $ {el.price}
            </span>
            <button
              onClick={() => dispatch(addToBasket(el))}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
