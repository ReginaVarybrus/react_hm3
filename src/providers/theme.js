import React, {useState} from "react";


export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(true);

    const changeThemeDark = () => setTheme(theme ? theme : !theme);

    const changeThemeLight = () => setTheme(theme ? !theme : theme);

    const getContextValue = () => {
        return {
            changeThemeDark,
            changeThemeLight,
            theme
        }
    }

    return <ThemeContext.Provider value={getContextValue()}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider;
