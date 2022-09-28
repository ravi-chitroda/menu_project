import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* Below is static way to filter items but we need dynamic way as if items and categories increase it will be difficult to handle in static way*/}
      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        BreakFast
      </button> */}
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
