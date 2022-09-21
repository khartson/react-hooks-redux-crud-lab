import React, { useState } from "react";

function RestaurantInput({ onRestaurantSubmit }) {
  const [name, setName] = useState("");
  
  function handleInputChange(event){
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRestaurantSubmit(name);
    setName('');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input 
            type='text'
            name='name'
            value={name}
            onChange={handleInputChange}
            />
        </label>
        <button type='submit'>Add Restaurant</button>
      </form>

    </div>)
  ;
}

export default RestaurantInput;
