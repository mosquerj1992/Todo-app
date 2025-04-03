import { useState } from "react";
import { Task } from "./Task";


export const TodoCard = ({title='Titulo por defecto', tasks=[]}) => {




    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([
        { tarea: "Pasear al perro", completed: false },
        { tarea: "Llamar a mi mamá", completed: false },
        { tarea: "Lavar la ropa", completed: false },
    ]);

    const handleToggleTask = (indice) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[indice].completed = !nuevasTareas[indice].completed
        setTareas(nuevasTareas);

    }

    const handleDeleteTask = (indice) => {

        console.log(tareas);
        const newlisTasks = tareas.filter((_, indice) => indice !== indice);
        setTarea(newlisTasks);
       
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
                <h2>({title}) </h2>
            </div>

            <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tareas.map((tarea, indice) => (
                        <li
                            key={indice}
                            onClick={() => handleToggleTask(indice)}
                            style={{
                                textDecoration: tarea.completed ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                        >
                            {/* <Task tarea={tarea} tareas={tareas} setTareas={setTarea}/> */}
                            <input
                                type="checkbox"
                                checked={tarea.completed}
                                onChange={() => handleToggleTask(indice)}
                            />

                            <span>{tarea.tarea}</span>

                            <button
                                onClick={() => handleDeleteTask(indice)}
                                style={{
                                    marginLeft: '1em',
                                    border: 'none',
                                    borderRadius: '15px',
                                    cursor: 'pointer'
                                }}
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>

                <div>
                    <form onSubmit={handleDeleteTask}>
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

