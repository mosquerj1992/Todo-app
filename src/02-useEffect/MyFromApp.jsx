import React, { useEffect, useState } from 'react'

export const MyFromApp = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [valid, setValid] = useState(false);

    useEffect(()=>{
        document.title='Mi Aplicacion React';

    },[]);


    useEffect(() => {

        const regex = /\S+@\S+\.\S+/;
        setValid(regex.test(email));

        // const OnMouseMove  =(event)=>{
        //     console.log(event.target); 

        // }
         
        // window.addEventListener("mousemove", OnMouseMove );

        // return () => {
        //     window.removeEventListener('mousemove', OnMouseMove );
        // }


    }, [email])

    const onHanlChange = ({ target }) => {
        setEmail(target.value);
    }


    const onHanlChangeName = ({ target }) => {
        setName(target.value);
    }

    return (
        <>
            <div>MyFromApp</div>

            <input
                type="text"
                value={name}
                placeholder='Ingrese su nombre '
                onChange={(event) => onHanlChangeName(event)}
            />

            <input
                type="email"
                value={email}
                placeholder='example@email.com'
                onChange={(event) => onHanlChange(event)}
            />

            <p>{valid
                ? ('El email es valido 😁')
                : ('El email no es valido 😒')
            }
            </p>

        </>
    )
}
