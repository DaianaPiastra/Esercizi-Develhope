import { useState } from "react";

export function TodoList() {
  const [toDo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmitButton() {
    const newToDo = { id: toDo.length + 1, text: input };

    setTodo([...toDo, newToDo]);
  }

  function handleReset() {
    setTodo([]);
  }

  function handleRemoveLi(id) {
    setTodo(toDo.filter(action => action.id !== id));
  }

  return (
    <div>
      <h1>MyTo-Do-List:</h1>
      <ul>
        {toDo.map((action) => (
          <li key={action.id}>
            {action.text}
            <button onClick={() => handleRemoveLi(action.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmitButton}>
        <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}/>
      </form>
      
    </div>
  );
}
