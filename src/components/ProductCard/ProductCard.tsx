import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import { ProductCardType } from "../../types/ProductCardType";
import classNames from "classnames";
import { useCart } from "../../context/CartContext";

type Props = {
  product: ProductCardType;
  onAddToCart: () => void;
};

export const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cart.some((item: ProductCardType) => item.id === product.id);
    setIsInCart(productInCart);
  }, [cart, product.id]);

  const handleCartButtonClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
      onAddToCart();
    }
  };

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
      <h2 className="product-card__title">{product.title}</h2>

      <p className="product-card__category">
        Product category: {product.category}
      </p>

      <div className="product-card__price">
        <p className="product-card__price-text">Price:</p>
        <p className="product-card__price-value">${product.price}</p>
      </div>

      <button
        className={classNames("product-card__button", { "product-card__button--active": isInCart })}
        onClick={handleCartButtonClick}
      >
        {isInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};
