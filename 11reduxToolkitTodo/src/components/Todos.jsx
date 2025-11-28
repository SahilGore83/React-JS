import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);  
  const [newText, setNewText] = useState("");  

  return (
    <>
      <div>Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* TEXT or INPUT */}
            {editId === todo.id ? (
              <input
                className="text-black p-1 rounded"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex gap-3 items-center">
              {/* EDIT BUTTON */}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => {
                  if (editId === todo.id) {
                    dispatch(updateTodo({ id: todo.id, text: newText }));
                    setEditId(null);
                  } else {
                    setEditId(todo.id);
                    setNewText(todo.text);
                  }
                }}
              >
                {editId === todo.id ? "📁" : "✏️"}
              </button>

              {/* DELETE BUTTON */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
