import { useState } from "react";
import { Task } from "./Task";


export const TodoCard = ({ title = 'Titulo por defecto', tasks = [] }) => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([
        // { tarea: "Pasear al perro", completed: false },
        // { tarea: "Llamar a mi mamá", completed: false },
        // { tarea: "Lavar la ropa", completed: false },
    ]);

    const handleToggleTask = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[indice].completed = !nuevasTareas[indice].completed;
        setTareas(nuevasTareas);

    };

    const handleDeleteTask = (indice) => {
        const newListTasks = tareas.filter((_, i) => i !== indice);
        setTareas(newListTasks);


    };

    const handleAddNewTask = (event) => {
        event.preventDefault();
        if (tarea.trim() === "") return;
        setTareas((tareas) => [...tareas, { tarea, completed: false }]);
        setTarea("");
    };

    const handleInputChange = (event) => {
        setTarea(event.target.value);
    };


    return (
        <div className="card">
            <div>
                <h3>({title}) </h3>
            </div>

            <div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {tareas.map((tareas, indice) => (
                        <li
                            key={indice}

                            style={{
                                textDecoration: tareas.completed ? "line-through " : "none",
                                cursor: "pointer",
                            }}
                        >
                            {/* <Task task={tarea}indice={indice} tasks={tareas} setTareas={setTarea}/>  */}

                            <input
                                type="checkbox"
                                checked={tareas.completed}
                                onChange={() => handleToggleTask(indice)}
                            />

                            <span>{tareas.tarea}</span>

                            <button
                                onClick={() => handleDeleteTask(indice)}
                                style={{
                                    marginLeft: "1em",
                                    border: "none",
                                    borderRadius: "45px",
                                    cursor: "pointer"
                                }}
                            >
                                🗑️
                            </button>

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

