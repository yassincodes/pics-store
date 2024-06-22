import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import { useMediaQuery } from 'react-responsive'


function Image({ img, className }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeCartItem } = useContext(
    Context
  );

  const isBigScreen = useMediaQuery({ query: '(min-width: 769px)' })

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite-icon"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite-icon"
        ></i>
      );
    }
  }

  const alreadyInCart = cartItems.some((photo) => photo.id === img.id);

  function cartIcon() {
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeCartItem(img.id)}
          className="ri-shopping-cart-fill add-icon"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line add-icon"
        ></i>
      );
    }
  }

  /* I'm using media query to render a div (my component) depending of the width */

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} alt="" className="image-grid" />

              {isBigScreen ? <> 
              {heartIcon()}
              {cartIcon()}
              </> : <>
              {img.isFavorite ? (
                <i
                  onClick={() => toggleFavorite(img.id)}
                  className="ri-heart-fill favorite-icon"
                ></i>
              ) : (
                <i
                  onClick={() => toggleFavorite(img.id)}
                  className="ri-heart-line favorite-icon"
                ></i>
              )}

              {alreadyInCart ? (
                <i
                  onClick={() => removeCartItem(img.id)}
                  className="ri-shopping-cart-fill add-icon"
                ></i>
              ) : (
                <i
                  onClick={() => addToCart(img)}
                  className="ri-add-circle-line add-icon"
                ></i>
              )}
              </>
              }
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    artist: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;