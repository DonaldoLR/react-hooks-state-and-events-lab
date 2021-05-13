import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [ themeToggle, setthemeToggle] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  function handleThemeToggle(){
    setthemeToggle(() => !themeToggle)
  }

  return (
    <div className={"App " + (false ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleThemeToggle} className={themeToggle ? 'App dark' : 'App light'}>Dark Mode</button>
      </header>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
