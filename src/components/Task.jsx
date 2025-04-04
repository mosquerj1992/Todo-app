import React from "react";
export const Task = ({ task, indice, tasks, setTareas }) => {

    const handleToggleTask = (indice) => {
        console.log(tasks);
        const nuevasTareas = [...tasks];
        nuevasTareas[indice].completed = !nuevasTareas[indice].completed;
        setTareas(nuevasTareas);

    };

    const handleDeleteTask = (indice) => {
        const newlistTasks = tasks.filter((_, i) => i !== indice);
        setTareas(newlistTasks);
    };


    return (
        <>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(indice)}
            />

            <span>{task.tarea}</span>

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
        </>
    );
};
