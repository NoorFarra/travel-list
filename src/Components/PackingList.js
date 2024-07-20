import { useState } from "react";

export default function PackingList({ Addeditems, OnDelete, UpdateItem, ClearList }) {

    const [sortBy, setSortBy] = useState("input")
  
    let sortedItems;
     if(sortBy === "input") {sortedItems = Addeditems};
     if(sortBy === "description") {sortedItems =Addeditems.slice().sort((a,b) => a.Description.localeCompare(b.Description))};
     if(sortBy === "packed") {sortedItems = Addeditems.slice().sort((a, b) => Number(a.packed) - Number(b.packed))};
  
     
  
    return (
      <div className="list">
      <ul>
        {sortedItems.map((item)=> (
          <Item item={item} OnDelete={OnDelete} key={item.id} UpdateItem={UpdateItem} />
          ))} 
      </ul>
  
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}> 
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        
        <button style={{ display: sortedItems.length === 0 ? "none" : "" }} onClick={ClearList}>Clear List</button>
  
  
      </div>
      
      </div>
    )
  }

  function Item({item, OnDelete, UpdateItem}) {


      
    return (
      <li>
        <input
         type="checkbox" 
         value={item.packed} 
         onChange={()=> UpdateItem(item.id)} />
       <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.Quantity} {item.Description}
        </span>
        <button onClick={()=> OnDelete(item.id)}>❌</button>
       
        </li>
    )
  }