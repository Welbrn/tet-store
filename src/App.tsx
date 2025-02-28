import React from "react";
import "./styles/App.scss";
import { ProductList } from "./components/ProductList/ProductList";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />

        <ProductList />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
