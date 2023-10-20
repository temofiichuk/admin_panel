import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (trigger) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_DB_SERVER}/products`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [trigger]);

  return products;
};

export default useGetProducts;
