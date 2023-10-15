import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner/Spinner";

const PrivateRoutes = () => {
  const [isTokenVerify, setIsTokenVerify] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsCheckingToken(false);
      return;
    }

    const fetchData = async () => {
      try {
        const { data } = await axios.post(`${process.env.REACT_APP_DB_SERVER}/token`, {
          token,
        });
        if (data) setIsTokenVerify(true);
      } catch (e) {
        setIsTokenVerify(false);
        console.log(e);
      }
      setIsCheckingToken(false);
    };

    fetchData();
  }, []);

  if (isCheckingToken) return <Spinner text="Authentication" />;

  return isTokenVerify ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
