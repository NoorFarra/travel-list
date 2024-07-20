import React, { useState } from 'react'
import Logo from './Components/Logo';
import Form from './Components/Form';
import  PackingList from './Components/PackingList'
import Stats from './Components/Stats';



const App = () => {

  const [items, setItems] = useState([]);

  const number = items.length;
  const packedItems = items.filter((item)=> item.packed === true).length;


  
  const AddItems = (item) => {
    setItems((items) => [...items, item]);
  }


  const DeleteItem = (id) => {
    setItems((items) => items.filter((items)=> id !== items.id)) 

  }

const UpdateItem = (id) => {
  setItems((items) => items.map((item) => 
    item.id === id ? {...item, packed: !item.packed} : item));
}

const ClearList = () => {
  setItems((items) => []);
} 


  return (
    <>
    <div className="app">
      <Logo />
      <Form OnAdd={AddItems} />
      <PackingList 
        Addeditems={items}
        OnDelete={DeleteItem}
        UpdateItem={UpdateItem}
        ClearList={ClearList}/>
      <Stats 
      number={number}
      packedItems={packedItems} />
      </div> </>
  )
}












export default App
