import React, { useEffect, useState } from "react";
import { ProductCardType } from "../../types/ProductCardType";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.scss";
import { getProducts } from "../../api/getProducts";
import { Filter } from "../Filter/Filter";
import { useCart } from "../../context/CartContext";

export const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="filter">
        <Filter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="productList">
        {filteredProducts.map((product: ProductCardType) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
};
