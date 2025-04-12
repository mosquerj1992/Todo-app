import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export const HeaderApp = () => {

  const { theme, onToggleTheme } = useContext(ThemeContext)

  // console.log(theme);
  // console.log(onToggleTheme);

  const TitleApp = "TODO LIST APP";

 
  const estilo= {
  backgroundColor: theme === 'ligth'? '#fff':'#222',
  color: theme === 'ligth'? '#000':'#fff',
  margin: '1em',
  padding: '1em'

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