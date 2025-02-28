import React, { useState } from "react";
import "./Header.scss";
import { CartModal } from "../CartModal/CartModal";
import { useCart } from "../../context/CartContext";


export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartCount } = useCart();

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <img src="image/logo192.png" alt="HeaderLogo" className="header__logo" />
      <nav className="nav">
      <div className="nav__cart" onClick={handleCartClick}>
          {cartCount > 0 && (
            <span className="nav__cart-count">{cartCount}</span>
          )}
        </div>
      </nav>
      {isModalOpen && <CartModal onClose={handleCloseModal} />}
    </header>
  );
};
