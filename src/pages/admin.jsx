import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCard from '../components/addCard'
import logo from '../assets/logo.png'

const uchastnik = () => {

  const navigate = useNavigate();
  if (localStorage.getItem("uchastnik")) {
    useEffect(() => {
      navigate("/uchastnik");
    }, []);
  }

  if (!localStorage.getItem("admin")) {
    useEffect(() => {
      navigate("/login");
    }, []);
  }

  return (
    <div>
      <AddCard/>
        
    </div>
  );
};

export default uchastnik;
