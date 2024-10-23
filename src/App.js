import React, { useState } from 'react';
import Categories from './Categories'
import Menu from './Menu';
import items from './data';

const AllCategory = ['all', ...new Set(items.map(item => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(AllCategory)

  function filterItems(category) {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </>
  );
}

export default App;