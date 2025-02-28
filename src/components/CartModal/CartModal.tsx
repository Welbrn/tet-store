import React, { useEffect } from "react";
import "./CartModal.scss";
import { CartModalItem } from "./CartModalItem/CartModalItem";
import { useCart } from "../../context/CartContext";

type Props = {
  onClose: () => void;
};

export const CartModal: React.FC<Props> = ({ onClose }) => {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="cart-modal">
      <div className="cart-modal__content">
        <button className="cart-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="cart-modal__title">Cart</h2>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <CartModalItem
              key={index}
              product={product}
              onRemove={() => removeFromCart(product.id)}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};
