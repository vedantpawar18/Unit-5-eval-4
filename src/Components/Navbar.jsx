import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate= useNavigate();

  const handleClick=() =>{
    navigate("/add")
  }
  return (
    <div>
      <div>Product Dashboard</div>
      <div>
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button onClick={handleClick} data-cy="add-product-navbar-button">Add Product</button>
      </div>
    </div>
  );
};

export default Navbar;
