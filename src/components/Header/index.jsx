import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logos.svg";
import { IoCartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchfunction } from "../../redux/createSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState(false);
  const { basket } = useSelector((s) => s.bas);
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-black py-8 text-white">
      <div className="container">
        <div className=" flex items-center justify-between">
          <div className="">
            <img src={logo} alt="imageLogo" />
          </div>
          <nav
            style={{
              paddingRight: searchInput ? "150px" : "0",
            }}
            className="flex items-center gap-[50px] font-bold 	tracking-widest"
          >
            <Link to="/Home" onClick={() => setSearchInput(false)}>
              Home
            </Link>
            <Link to="/man" onClick={() => setSearchInput(false)}>
              MAN
            </Link>
            <Link to="/woman" onClick={() => setSearchInput(false)}>
              WOMAN
            </Link>
            <Link to="/woman" onClick={() => setSearchInput(false)}>
              KIDS
            </Link>
            <Link to="/woman" onClick={() => setSearchInput(false)}>
              SALE
            </Link>
          </nav>
          <div className="flex items-center gap-[20px]">
            <div className="relative flex items-center gap-3">
              <input
                onChange={(e) => dispatch(searchfunction(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    nav("/search");
                  }
                }}
                style={{
                  left: searchInput ? "-300px" : "0",
                  opacity: searchInput ? "1" : "0",
                  transition: ".8s",
                }}
                type="text"
                className=" absolute left-[-30px] z-10  text-2xl text-white bg-transparent py-[4px] px-[8px] border-2 border-solid border-white rounded-[10px] outline-none"
                placeholder="Search"
              />
              <Link
                to="/search"
                onClick={() => setSearchInput(!searchInput)}
                className="text-3xl z-20"
              >
                <FaSearch />
              </Link>
            </div>
            <div className="relative">
              <a className=" cursor-pointer">
                {" "}
                <Link
                  to="/basket"
                  onClick={() => setSearchInput(false)}
                  className="text-3xl z-20 cursor-pointer"
                >
                  <IoCartSharp />

                  {basket?.length ? (
                    <div className=" absolute top-[-22px] left-5 rounded-[50%] flex justify-center items-center w-6 h-6 bg-white">
                      <span className="text-center text-[18px] text-red-700">
                        {basket.length}
                      </span>
                    </div>
                  ) : null}
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
