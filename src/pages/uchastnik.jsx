import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Header from "../components/header";
import Card from "../components/card";

const uchastnik = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
    //   function check 
    (function () {
      if (localStorage.getItem("admin")) {
        useEffect(() => {
          navigate("/admin");
        }, []);
      }

      if (!localStorage.getItem("uchastnik")) {
        useEffect(() => {
          navigate("/login");
        }, []);
      }
    })();
  //  function check end..

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="cards-container">
        {items.length === 0 ? (
          <div className="loading">Loading...</div>
        ) : (
          items.map((item) => <Card p={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default uchastnik;
