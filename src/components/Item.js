import React, {useState} from "react";

function Item({ name, category }) {

   const [inCart, setClassName] = useState(false);

   function addToCart() {
      setClassName(() => !inCart)
   }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart} >{ inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;