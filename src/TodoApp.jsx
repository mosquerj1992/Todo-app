import React, { useState } from "react";


export const TodoApp = () => {
  
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([
    { tarea: "Pasear al perro", completed: false },
    { tarea: "Llamar a mi mamá", completed: false },
    { tarea: "Lavar la ropa", completed: false },
  ]);

  const handleInputChange = (event) => {
    setTarea(event.target.value);
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    if (tarea.trim() === "") return;
    setTareas((tareas) => [...tareas, {tarea, completed: false}]);
    setTarea("");
  };

  const handleToggleTask = (indice) => {
    const nuevasTareas= [...tareas];
    nuevasTareas[indice].completed = !nuevasTareas[indice].completed
    setTareas(nuevasTareas);
    console.log(tareas);
  }

  return (
    <div>
      <h2>Mi lista de tareas 📝</h2>
      <hr />

      <form onSubmit={handleAddNewTask}>
        <input
          type="text"
          value={tarea}
          placeholder="Ingrese su tarea"
          onChange={handleInputChange}
        />

        <button type="submit">Agregar</button>
      </form>

      <hr />

      <ul>
        {tareas.map((t, indice) => (
          <li 
            key={indice}
            onClick={()=>handleToggleTask(indice)}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {t.tarea}
          </li>
        ))}
      </ul>
    </div>
  );
};