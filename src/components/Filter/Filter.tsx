import React from "react";
import "./Filter.scss";

type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export const Filter: React.FC<Props> = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"];

  return (
    <div className="filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter__button ${selectedCategory === category ? "filter__button--active" : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};


