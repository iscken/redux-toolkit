import React from "react";
import { useSelector } from "react-redux";
import BasketCart from "../basketCart";
import emptyBasket from "../../assets/image/empty-basket.webp";

const Basket = () => {
  const { basket } = useSelector((s) => s.bas);
  return (
    <div className="py-[50px]">
      <div className="container">
        {basket.length ? (
          <div className="">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {basket.map((el) => (
                <BasketCart el={el} />
              ))}
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src={emptyBasket} alt="" width={600} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
