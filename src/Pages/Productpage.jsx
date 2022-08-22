
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
import { getProductRecords } from '../Redux/action'
import {Link, useSearchParams} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import ProductCard from "../Components/ProductCard";
import styled from 'styled-components';

const Productpage = () => {
  const dispatch= useDispatch();
    const [searchParams] = useSearchParams();
    
    const products = useSelector((store)=>store.products);

    const location= useLocation();

    useEffect(() =>{
       if (location || products.length===0){
        const sortBy = searchParams.get("sortBy")
        const queryParams= {
            params:{
                _sort: sortBy && "price",
                _order: sortBy
            }
        }
        dispatch(getProductRecords(queryParams))
       }
    },[location.search]);

    console.log(products)
  return (
    <div style={{ width: "100%" }}>
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        <ProductsWrapper>
         {products.length>0 && products.map((product)=>{
                return (
                   <ProductCard key={product.id} item={product}/>
                )
            })}
        </ProductsWrapper>
      </div>
    </div>
  );
};

export default Productpage;

const ProductsWrapper = styled.div`
width: 100%;
border: 1px solid blue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content:center;
grid-gap:30px
`