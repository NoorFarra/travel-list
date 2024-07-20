import { useState } from "react";

export default function Form({OnAdd}) {
    const [Description, setDescription] = useState("");
    const [Quantity, setQuantity] = useState(1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!Description) return;
     
     
      const newItem = {Description, Quantity, packed:false, id: Date.now()};
      OnAdd(newItem);
      console.log(newItem);
      setDescription("");
      setQuantity(1);
   }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do u want for your trip</h3>
        <select
        value={Quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({length:20}, (_, i)=> i +1 ).map((num)=> (
          <option value={num}>{num}</option>
        ))}</select>
        <input type="text"
         placeholder='Items...' 
         value={Description} 
         onChange={(e)=> setDescription(e.target.value)}
         />
        <button >Add</button>
      </form>
    )
  }