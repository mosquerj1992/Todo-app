import { useState } from "react";
import { Task } from "./Task";


export const TodoCard = ({ title = 'Titulo por defecto', tasks = [] }) => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleAddNewTask = (event) => {
        event.preventDefault();
        if (tarea.trim() === "") return;
        setTareas((tareas) => [...tareas, { tarea, completed: false }]);
        setTarea("");
    };

    const handleInputChange = (event) => {
        setTarea(event.target.value);
    };


    const handleToggleTask = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[indice].completed = !nuevasTareas[indice].completed;
        setTareas(nuevasTareas);

    };

    const handleDeleteTask = (indice) => {
        const newListTasks = tareas.filter((_, i) => i !== indice);
        setTareas(newListTasks);
    };


    return (
        <div className="card">
            <div>
                <h3>({title}) </h3>
            </div>

            <div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {tareas.map((t, indice) => (
                        <li
                            key={indice}

                            style={{
                                textDecoration: t.completed ? "line-through " : "none",
                                cursor: "pointer",
                            }}
                        >
                         <Task 
                         task={t} 
                         indice={indice} tasks={tareas} 
                         handleToggleTask={handleToggleTask}
                         handleDeleteTask={handleDeleteTask}/> 

                          
                        </li>
                    ))}
                </ul>

                <div>
                    <form onSubmit={handleAddNewTask}>
                        <input
                            type="text"
                            value={tarea}
                            placeholder="Ingrese su tarea"
                            onChange={handleInputChange}

                        />

                        <button type="submit">➕</button>
                    </form>
                </div>



            </div>
        </div >
    );
};

