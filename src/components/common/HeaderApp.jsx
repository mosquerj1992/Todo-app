import React, { useActionState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export const HeaderApp = () => {

const {theme, onToggleTheme} = useContext(ThemeContext)


  const TitleApp = "TODO LIST APP";  

  const estilo ={
    backgroundColor: theme ==='lighr' ? '#fff': '#222',
    color: theme ==='lighr' ? '#000': '#fff',
    margin:'1em',
    padding:'1em'
  }

  return (
    <header className="header">
      <h1>{TitleApp}</h1>

      <div style={estilo}>
        <p>El tema actual es:{theme}</p>
        <button onClick={onToggleTheme}>Cambiar tema</button>


      </div>
    </header>
  );
};