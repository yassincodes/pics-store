import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/aldhairescobar/pictobook-images/main/images.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function addToCart(img) {
    setCartItems(() => [...cartItems, img]);
  }

  function removeCartItem(id) {
    setCartItems(() => {
      return cartItems.filter((item) => item.id !== id);
    });
  }

  function toggleFavorite(id) {
    const newPhotosArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(newPhotosArray);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeCartItem,
        setCartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };