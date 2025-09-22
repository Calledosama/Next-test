"use client";

import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const results = await res.json();
      setTodo(results);
    };

    fetchTodo();
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h6>Meow</h6>
    </div>
  );
}