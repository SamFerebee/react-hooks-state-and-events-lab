import React, {useState} from "react";

function Item({ name, category }) {
  const [cartOrNot, setCartOrNot] = useState("")
  const addToCart = () =>{
    setCartOrNot("in-cart")
  }
  return (
    <li className={cartOrNot}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
