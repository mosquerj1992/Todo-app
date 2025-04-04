import { useEffect, useState } from "react";
import "./App.css";
import { HeaderApp } from "./components/common/HeaderApp";
import { TodoCard } from "./components/TodoCard";
import loader from "../src/assets/loader.gif";


function App() {

  const [cards, setCards] = useState([{ title: "Actividades Hoy", tasks: [] }]);

  const handleAddNewCard = () => {
    setCards([...cards, { tasks: [] }]);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      <HeaderApp />

      {loading ? (
        <img src={loader} alt="loanding..." />
      ) : (

        <>
          <div className="content">
            {cards.map((card, indice) => (
              <TodoCard title={card.title} key={indice} />
            ))}
          </div>

          <button className="new-list-btn" onClick={handleAddNewCard}>
            Nueva Lista
          </button>
        </>
      )}
    </>
  );

}


export default App


