import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductRecords, updateProductRecords } from '../Redux/action';

const Editpage = () => {
  const products= useSelector(store=> store.products)
  const {id} = useParams();
  const [productName, setproductName]= useState("");
  const [productPrice, setproductPrice] = useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate()

  useEffect (() =>{
    if(id){
      const currentProduct = products.find(product=>product.id===id);
      if(currentProduct){
        setproductName(currentProduct.title)
        setproductPrice(currentProduct.price)
      }
    }
  },[id, products]);

  const handleSubmit= (e) =>{
    e.preventDefault();
    const payload={
      title:productName,
      price: productPrice
    }
    dispatch(updateProductRecords(id,payload))
    .then(() => {
      dispatch(getProductRecords());
    })
    navigate("/")
  };
// console.log(productName, productPrice,id)
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Product Title</label>
        <input onChange={(e)=>setproductName(e.target.value)} value={productName} data-cy="edit-product-title" type="text" />
      </div>
      <div>
        <label>Product Price</label>
        <input onChange={(e)=>setproductPrice(e.target.value)} value={productPrice}  data-cy="edit-product-price" type="number" />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
       <button type='submit' data-cy="update-button">Update</button>
      </div>
      </form>
    </div>
  );
};

export default Editpage;
