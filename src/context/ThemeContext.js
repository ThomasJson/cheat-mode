import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    return (
        <ThemeContextProvider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContextProvider>
    )
}

export default ThemeContextProvider;