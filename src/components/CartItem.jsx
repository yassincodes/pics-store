import React, { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        onClick={() => removeCartItem(item.id)}
      ></i>
      <img className="cart-item-img" alt="" src={item.url} />
      <p className="item-price">$5.99</p>
    </div>
  );
}

export default CartItem;