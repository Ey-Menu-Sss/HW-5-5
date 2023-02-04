import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from './admin'
import Uchastnik from './uchastnik'

const login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [display, setDisplay] = useState("none")
  const navigate = useNavigate()

  if(localStorage.getItem("admin")){
    useEffect(() => {
      navigate("/admin")
    }, [])
  }
  if(localStorage.getItem("uchastnik")){
    useEffect(() => {
      navigate("/uchastnik")
    }, [])
  }


  // password
  
  const admin = {
    username: "itachi",
    password: "uchixa",
  };
  const uchastnik = {
    username: "naruto",
    password: "oturan",
  };

  //   passwords end
  

  // functions

  function f_username(e) {
    setUsername(e.target.value)
  }
  function f_password(e) {
    setPassword(e.target.value)
  }
  
  function submit(e) {
    e.preventDefault()
    console.log("submitted");
    if(username === admin.username && password === admin.password){
      localStorage.setItem("admin", "submitted")
      setDisplay("block")
      navigate('/admin');
    }else if(username === uchastnik.username && password === uchastnik.password){
      localStorage.setItem("uchastnik", "submitted")
      setDisplay("block")
      navigate('/uchastnik');
    }
    else{
      setDisplay("block")
    }
  }

  //  functions end..

  return (
    <div className="l-container">
      <div className="login">
        <form className="form" onSubmit={submit}>
          <div className="iconwithinput">
            {/* <i className="bx bx-user"></i> */}
            <input
              type="text"
              className="username input"
              placeholder="USERNAME"
              onChange={f_username}
            />
          </div>
          <div className="iconwithinput">
            {/* <i className="bx bx-lock-alt"></i> */}
            <input
              type="password"
              className="password input"
              placeholder="PASSWORD"
              onChange={f_password}
            />
          </div>
          <button type="submit" className="btn">
            LOGIN
          </button>
          <a href="#" className="forgotPsw">
            Forgot password?
          </a>
          <h2 style={{display: display}} className="error">username yoki parol hato!</h2>
        </form>
      </div>
    </div>
  );
};

export default login;
