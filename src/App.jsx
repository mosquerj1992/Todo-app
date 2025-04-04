import { useState } from "react";
import "./App.css";
import { HeaderApp } from "./components/common/HeaderApp";
import { TodoCard } from "./components/TodoCard";


function App() {

  const [cards, setCards] = useState([{ title: "Actividades hoy ", tasks: [] }]);

  const handleAddNewCard = () => {
    setCards( [...cards, {title: "", tasks: [] }])
  };

  return (

    <>
      <HeaderApp />
      {cards.map((card, indice) => (
        <TodoCard title={card.title} key={indice} />

      ))}


      <button className="new-list-btn"  onClick={handleAddNewCard}>Nueva Lista </button>

    </>
  );

}


export default App


