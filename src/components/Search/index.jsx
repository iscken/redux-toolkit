import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const { search } = useSelector((s) => s.list);
  console.log(search, "search");
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default Search;
