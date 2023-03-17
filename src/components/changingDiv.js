import { useContext } from "react";
import { ThemeContext } from '../providers/theme';
import Inputs from './inputs';

const ChangingDiv = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className="Changing-div"
          style={themeCtx.theme ? { background: "#3d231a" } : { background: "#b09a96" }}>
            <Inputs/>
            <div className="Indicator"
              style={themeCtx.theme ? { background: "#b09a96", color: 'black' } : { background: "#3d231a", color: 'white' }}>
                {themeCtx.theme ? 'Night' : 'Day'}
              </div>
        </div>
    )
}

export default ChangingDiv;