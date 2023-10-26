import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState(null);
  const [canUpdateProducts, setCanUpdateProducts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_DB_SERVER}/products`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setCanUpdateProducts(false);
    };
    fetchData();
  }, [canUpdateProducts]);

  return [products, setCanUpdateProducts];
};

export default useGetProducts;
