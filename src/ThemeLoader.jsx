import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeContext';

export const ThemeLoader = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const oldLink = document.getElementById("theme-css");


        if (oldLink) {
            oldLink.remove();
        }
        const link = document.createElement("Link");
        link.id = "theme-css";
        link.rel = "stylesheet";
        link.href = `./src/${theme}.css`;
        document.head.appendChild(link);
    }, [theme]);


    return null

};

