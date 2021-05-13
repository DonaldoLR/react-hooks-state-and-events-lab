import React, {useState} from "react";

function Item({ name, category }) {
  const [itemInCart, setItemInCart] = useState(false); 

  function handleCartItem(){
    setItemInCart(() => !itemInCart)
  }
  return (
    <li className={itemInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
