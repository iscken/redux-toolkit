import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decriment, deleteBasket } from "../../redux/BasketSlice";

const BasketCart = ({ el }) => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((s) => s.bas);
  console.log(quantity, "quan");
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img
            src={el.image}
            className="w-14 md:w-20 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white ">
          {el.name}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <span className="sr-only">{el.name}</span>

            <button
              // onClick={() => dispatch(decriment())}
              className="inline-flex items-center justify-center p-1 me-3 font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-2xl text-bold"
              type="button"
            >
              -
            </button>
            <div className="w-11 h-7 border-2 border-solid border-gray-300 text-xl flex items-center justify-center">
              <span>{quantity}</span>
            </div>
            <button
              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          $ {el.price}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => dispatch(deleteBasket(el))}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BasketCart;
