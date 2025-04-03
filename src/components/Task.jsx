import React from 'react'

export const Task = ({tarea,tareas,setTareas}) => {

    const handleToggleTask = () => {
        console.log(tareas);
        const nuevasTareas= [...tareas];
        nuevasTareas[indice].completed = !nuevasTareas[indice].completed
        setTareas(nuevasTareas);
        
      }

    return (
        <>
            <input
                type="checkbox"
                checked={tarea.completed}
                onChange={() => handleToggleTask}
            />

            <span>{tarea.tarea}</span>

            <button
                onClick={() => handleDeleteTask}
                style={{
                    marginLeft: '1em',
                    border: 'none',
                    borderRadius: '15px',
                    cursor: 'pointer'
                }}
            >
                🗑️
            </button>
        </>
    )
}
