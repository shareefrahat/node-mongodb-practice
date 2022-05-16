import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-white text-blue-800 text-xl py-5 shadow-lg flex flex-row justify-evenly">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add">Add</Link>
        <Link to="/manage">Manage</Link>
      </nav>
    </div>
  );
};

export default Header;
