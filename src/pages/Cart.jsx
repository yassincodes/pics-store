import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { useState } from "react";

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const [btnDisplay, setBtnDisplay] = useState("Place Order");

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const total = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function placeOrder() {
    setBtnDisplay("Ordering...");
    setTimeout(() => {
      setCartItems([]);
    }, 3000);
  }

  return (
    <main className="cart-page container">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {total}</p>

      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{btnDisplay}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart;