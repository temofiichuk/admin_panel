import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5678/products");
        setProducts(data);
        console.log("get Products");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
