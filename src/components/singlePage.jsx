import { React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/header";

const siglePage = () => {
    console.log(useParams());
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    }, [])
  return (
    <div>
        <Header/>
        <div className="more">
        <img
          className="more-img" src={item.image}
          width="300px"
          alt=""
        />
        <div className="more-title">
          <div className="title">
            {item.title}
          </div>
          <br /> 
          <div className="description">
            {item.description}
          </div>
          <br />
          <div className="category">
            <span>Category: </span>
            {item.category}
          </div>
          <br />
          <div className="price">
            <span>price: $</span>
            {item.price}
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default siglePage