import List from "./List1";
import React, { useState, useEffect } from "react";

const data = ["A","B","C","B"]
  
  export default function App1() {
    
    const [items, setItems] = useState(data);
    const reorder = (id) => {
        let firstItem ;
        const filteredItems = items.filter((item,index) => {
          if (index !== id) {
            return true;
          }
        else 
          firstItem = [item];
          return false ;
        });
        console.log("filteredItems",filteredItems)
        console.log("firstItem",firstItem)
        setItems([...firstItem, ...filteredItems]);
        console.log("Items",items)
      };
 
    return (
      <div className="App">
       <ul>
    {items.map((item,index) => (
      <li onClick={() => reorder(index)}>
        {item}
      </li>
     ))}
   </ul>
      </div>
    );
  }