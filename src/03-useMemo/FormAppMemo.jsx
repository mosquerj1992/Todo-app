import React, { useMemo,useState } from 'react'

const slowFuntion = (num) => {
    console.log("Ejecuntando calculo Lento...");
    for (let i = 0; i < 1e9; i++) { } //
    return num * 2;
};

export const FormAppMemo = () => {
 
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    const doubled = useMemo(() => slowFuntion(number), [number]);


    return (

        <div>
            <input type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}

            />
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribir algo"
            />
            <p>Resultado:{doubled}</p>
        </div>
    );
};
