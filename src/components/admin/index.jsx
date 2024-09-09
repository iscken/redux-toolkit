import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/createSlice";

const Admin = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const createObject = () => {
    if (
      image === "" ||
      name === "" ||
      age === "" ||
      price === "" ||
      category === ""
    ) {
      alert("error");
    } else {
      let obj = {
        id: Date.now(),
        image,
        name,
        age,
        price,
        category,
        rating: Math.floor(Math.random() * 5),
      };
      dispatch(createProduct(obj));

      setImage("");
      setName("");
      setAge("");
      setPrice("");
      setCategory("");
    }
  };
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-center text-white font-bold text-2xl">
          CREATE PRODUCT
        </h1>
        <div className="flex items-center justify-center flex-col gap-4">
          <input
            className="py-3 px-5 w-[321px] bg-transparent border-b-2 border-black outline-none text-white"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image"
            value={image}
          />
          <input
            className="py-3 px-5 w-[321px] bg-transparent border-b-2 border-black outline-none text-white "
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <input
            className="py-3 px-5 w-[321px] bg-transparent border-b-2 border-black outline-none text-white"
            type="text"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            value={age}
          />
          <input
            className="py-3 px-5 w-[321px] bg-transparent border-b-2 border-black outline-none text-white [z"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            value={price}
          />
          <input
            className="py-3 px-5 w-[321px] bg-transparent border-b-2 border-black outline-none text-white"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            value={category}
          />
          <button
            className="text-white border-2 border-solid border-black py-2 w-[321px] bg-gra"
            onClick={createObject}
          >
            Submit
          </button>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Admin;
