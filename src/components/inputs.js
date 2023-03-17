import { useContext } from "react";
import { ThemeContext } from '../providers/theme';

const Inputs = () => {
    const themeCtx = useContext(ThemeContext);
  
    // const handleThemeDark = () => {
    //   themeCtx.changeThemeDark();
    // };

    // const handleThemeLight = () => {
    //     themeCtx.changeThemeLight();
    // };
  
    return (
      <div className="Inputs">
        <input style={themeCtx.theme ? { background: "#b09a96" } : { background: "#3d231a" }}/>
        <input style={themeCtx.theme ? { background: "#b09a96" } : { background: "#3d231a" }}/>
      </div>
    );
  };
  
export default Inputs;