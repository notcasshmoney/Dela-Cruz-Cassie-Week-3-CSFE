import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [newPriority, setNewPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim === "") return
    onSubmit(newItem, newPriority);
    setNewItem("");
    setNewPriority("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">NEW ITEM</label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        placeholder="ENTER TO DO ITEM"
        id="item"
      />

        <label htmlFor="priority">PRIORITY #</label>
      <input
        value={newPriority}
        onChange={e => setNewPriority(e.target.value)}
        type="text"
        placeholder="ENTER PRIORITY #"
        id="priority"
        disabled={newItem.trim() === ""} // Disable inout if newItem is empthy
      />
    
      </div>
      <button className="btn">ADD TO-DO</button>
    </form>
  );
}
