import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  } 
  const allItems = items.map(item => <Item key={item.id} name={item.name} category={item.category} />)
  const filtered = items.filter(item => item.category === selectedCategory )
  const filteredItems = filtered.map(item => <Item key={item.id} name={item.name} category={item.category} />)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} /> */}
          {selectedCategory != "All" ? filteredItems : allItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
