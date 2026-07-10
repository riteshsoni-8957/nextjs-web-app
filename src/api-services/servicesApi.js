import axios from "axios";

const getProducts = () => {
  return axios.get("https://dummyjson.com/products")
  .then((res) => res.data.products)
};

const getProductsDetails = (id) => {
  return axios.get(
    `https://dummyjson.com/products/${id}`
  )
  .then((res) => res.data)
};

export {getProducts, getProductsDetails}