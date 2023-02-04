import React, { useState } from "react";

const addCard = () => {
  const [display, setDisplay] = useState("none");

  // card values

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState();

  // card values end...
  let info = {
    name: name,
    title: title,
    description: description,
    rate: rate,
  };

  // functions:

  function addCard() {
    setDisplay("block");
  }
  function addCardNone() {
    setDisplay("none");
  }

  function f_name(e) {
    setName(e.target.value);
  }
  function f_title(e) {
    setTitle(e.target.value);
  }
  function f_decription(e) {
    setDescription(e.target.value);
  }
  function f_rate(e) {
    if (e.target.value > 5) {
      setRate(5);
    } else setRate(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    localStorage.setItem("new product", JSON.stringify(info));
  }
  return (
    <div>
      <div style={{ display: display }} className="add-card-and-container">
        <div className="add-card-container"></div>
        <i className="bx bx-x" onClick={addCardNone}></i>
        <div className="add-card">
          <form onSubmit={submit}>
            <h2>Product image:</h2>
            <input type="file" className="productImg" />
            <br />
            <br />
            <h2>Product name:</h2>
            <input
              type="text"
              className="productName"
              onChange={f_name}
              required
            />
            <br />
            <br />
            <h2>Product title:</h2>
            <input
              type="text"
              className="productTitle"
              onChange={f_title}
              required
            />
            <br />
            <br />
            <h2>Product description:</h2>
            <input
              type="text"
              className="productDescription"
              onChange={f_decription}
              required
            />
            <br />
            <br />
            <h2>Product Rate:</h2>
            <input
              type="text"
              className="prodcutRate"
              onChange={f_rate}
              required
            />
            <br />
            <br />
            <button className="btn-add-product">Add product</button>
          </form>
        </div>
      </div>
      <a href="#" onClick={addCard}>+ add card</a>  
    </div>
  );
};

export default addCard;
