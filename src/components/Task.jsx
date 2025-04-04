import React from "react";
export const Task = ({ task, indice, handleToggleTask, handleDeleteTask }) => {
    const onToggleTask = (indice) => {
        handleToggleTask(indice);
    };

   
    return (
        <>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(indice)}
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
