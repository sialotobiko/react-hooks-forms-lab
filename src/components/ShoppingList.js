import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function searchFilteredItems(event){
    setSearchItem(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") 
    return true;

    return item.category === selectedCategory;
  });

  const filteredSearchItems = itemsToDisplay.filter((item) => {
    return item.name.includes(searchItem)
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchItem} onSearchChange={searchFilteredItems}/>
      <ul className="Items">
        {filteredSearchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
