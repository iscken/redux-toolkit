import React from "react";
import { useSelector } from "react-redux";
import ProductsCart from "../ProductCart";
import emptyProduct from "../../assets/image/empty-search-result-10005708-8102446.webp";

const Products = () => {
  const { create } = useSelector((s) => s.list);
  return (
    <div className="py-[80px]">
      <h1 className="text-2xl font-bold text-white text-center">
        All Product Here
      </h1>
      <div className="container">
        {create.length ? (
          <div className="flex items-center flex-wrap gap-5 py-8 justify-center">
            {create.map((el, idx) => (
              <ProductsCart el={el} key={idx} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[80vh]">
            <img src={emptyProduct} alt="image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
