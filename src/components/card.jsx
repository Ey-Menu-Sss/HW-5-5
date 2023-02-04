import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

let count = 0
const cards = ({ p }) => {
  // styles

  const [color, setColor] = useState("blue");
  const [bg, setBg] = useState("white");
  const [length, setLenght] = useState(p.title.split(" "));
  const [title, settitle] = useState(length[0] + length[1] + length[2]);
  
  localStorage.setItem("purchase", "Purchase")
  const [pur, setPur] = useState(localStorage.getItem("purchase"));
  
  function purchase() {
    localStorage.purchase = "Purchased"
    setPur(localStorage.purchase);
    count++
    console.log(count)
    setColor("white");
    setBg("blue");
    let obj = {
      image: p.image,
      title: title,
      price: p.price, 
      rate: p.rating.rate,
    }
    console.log(obj)
     localStorage.setItem(`purchased${count}`, JSON.stringify(obj))
  }

  // purachse end..
  return (
    <div>
      <div className="card">
        <div className="div-img">
          <img
            className="img"
            src={p.image}
            width="224px"
            height="320px"
            alt="product"
          />
        </div>
        <br />
        <div className="title">{title}</div>
        <br />
        <div className="raitings">
          <div className="price">
            <span>$</span>
            {p.price}
          </div>
          <div className="rate">⭐{p.rating.rate}</div>
        </div>
        <br />
        <div className="btns">
          <button
            style={{ color: color, backgroundColor: bg }}
            className="purchase"
            onClick={purchase}
          >
            {pur}
          </button>
          <Link to={`/${p.id}`}>
            <button className="more-info">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cards;
