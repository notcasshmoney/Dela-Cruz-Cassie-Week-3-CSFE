import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return
    if (!title.trim() || !priority.trim()) return;
    onSubmit(newItem, priority);
    setNewItem("");
    setPriority("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={event => setNewItem(event.target.value)}
        type="text"
        placeholder="ENTER TO DO TITLE"
        id="item"
      />
      <input
        placeholder="ENTER PRIORITY"
        value={priority}
        onChange={event => setPriority(event.target.value)}
        type="text"
        id="item"
      />
    
      </div>
      <button className="btn">Add Todo</button>
    </form>
  );
}
