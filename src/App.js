import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Man from "./components/man";
import Woman from "./components/woman";
import Admin from "./components/admin";
import Products from "./components/Products";
import Search from "./components/Search";
import Basket from "./components/basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Man" element={<Man />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
