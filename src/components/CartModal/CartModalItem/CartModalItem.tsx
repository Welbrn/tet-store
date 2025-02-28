import React from "react";
import { ProductCardType } from "../../../types/ProductCardType";
import "./CartModalItem.scss";

type Props = {
  product: ProductCardType;
  onRemove: () => void;
};

export const CartModalItem: React.FC<Props> = ({ product, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <div className="cart-item__image-container">
          <button onClick={onRemove} className="cart-item__remove-button">
            &times;
          </button>

          <img
            src={product.image}
            className="cart-item__image"
            alt={product.title}
          />
        </div>

        <div className="cart-item__title">{product.title}</div>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__price">${product.price}</div>
      </div>
    </div>
  );
};
