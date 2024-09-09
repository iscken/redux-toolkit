import React from "react";
import bg from "../../assets/image/bg-photo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat center/cover`,
        minHeight: "85vh",
      }}
      className="flex items-end justify-center p-[10px]"
    >
      <div className="">
        <div className="flex items-center gap-7">
          <button
            onClick={() => nav("/admin")}
            className="text-2xl text-black bg-white border-2 border-solid border-gray px-[10px] py-[5px] font-bold"
          >
            ADD TO CART
          </button>
          <button
            onClick={() => nav("/Products")}
            className="text-2xl text-white  bg-transparent border-2 border-solid border-gray px-[10px] py-[5px]  font-bold"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
