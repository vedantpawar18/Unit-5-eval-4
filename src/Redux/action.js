//Write the action creator functions here


import * as types from "./actionTypes";
import axios from "axios";


const getProductRecords = (params) =>(dispatch) =>{
    dispatch({type:types.GET_PRODUCTS_REQUEST});
    return axios.get("http://localhost:8080/products",params)
    .then((r) =>{
        return dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload:r.data,
        });
    })
    .catch((e) =>{
        return dispatch({type: types.GET_PRODUCTS_FAILURE});
    })
};

const updateProductRecords = (id, payload)=>(dispatch) =>{
    dispatch({type : types.EDIT_PRODUCT_REQUEST });
    return axios 
    .patch(`http://localhost:8080/products/${id}`, payload)
    .then ((r)=> dispatch({type: types.EDIT_PRODUCT_SUCCESS}))
    .catch((e) =>dispatch({type: types.EDIT_PRODUCT_FAILURE}))
}

const deleteProduct = (id) =>(dispatch)=>{
    dispatch({type : types.DELETE_PRODUCT_REQUEST});
    return axios 
    .delete(`http://localhost:8080/products/${id}`)
    .then ((r)=> dispatch({type: types.DELETE_PRODUCT_SUCCESS}))
    .catch((e) =>dispatch({type: types.DELETE_PRODUCT_FAILURE}))
}
export {getProductRecords, updateProductRecords, deleteProduct}