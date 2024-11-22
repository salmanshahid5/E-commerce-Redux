import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from '../redux/actions/productAction';
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      
      // Check if response and response.data exist
      if (response && response.data) {
        dispatch(setProduct(response.data));
      } else {
        console.log("Error: No data found in the response.");
      }
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;