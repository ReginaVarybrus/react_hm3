import { useContext } from "react";
import { ThemeContext } from '../providers/theme';

const Buttons = () => {
    const themeCtx = useContext(ThemeContext);
  
    const handleThemeDark = () => {
      themeCtx.changeThemeDark();
    };

    const handleThemeLight = () => {
        themeCtx.changeThemeLight();
    };
  
    return (
      <div className="Buttons">
        <button className="Button-dark" onClick={handleThemeDark}>Dark</button>
        <button className="Button-light" onClick={handleThemeLight}>Light</button>
      </div>
    );
  };
  
export default Buttons;