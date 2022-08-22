import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProductRecords,deleteProduct  } from "../Redux/action";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
 

  const handleDelete=(id)=>{
    dispatch(deleteProduct(id))
    .then(() => {
      dispatch(getProductRecords());
    })
  }
 
  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.title}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img style={{height:"300px", width:"300px"}} data-cy="product-card-image" src={item.imageSrc} alt="Product" />
      </div>
      <div data-cy="product-card-price">{(item.price)}€ price</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button onClick={()=>handleDelete(item.id)} data-cy="delete-button">Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <Link to={`/edit/:${item.id}`}><button  data-cy="edit-button">Edit Product</button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
