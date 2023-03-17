import { useContext, useState } from "react";
import { ThemeContext } from '../providers/theme';
import Inputs from './inputs';

const ChangingDiv = () => {
    const themeCtx = useContext(ThemeContext);

    const [isFieldInvalid, setIsFieldInvalid] = useState(true);

    const handleChange = (value) => {
      console.log(value);
    }

    const handleChangeNotValid = (value) => {
      if (!parseInt(value)) {
        value.preventDefault();
        setIsFieldInvalid(true);
      } else {
        setIsFieldInvalid(false);
      }
    }

    return (
        <div className="Changing-div"
          style={themeCtx.theme ? { background: "#3d231a" } : { background: "#b09a96" }}>
            <Inputs text='' value='' placeHolder='put some number' onChange={handleChangeNotValid} isNotValid={isFieldInvalid}/>
            <Inputs text='' placeHolder='put some text' onChange={handleChange}/>
            <div className="Indicator"
              style={themeCtx.theme ? { background: "#b09a96", color: 'black' } : { background: "#3d231a", color: 'white' }}>
                {themeCtx.theme ? 'Night' : 'Day'}
              </div>
        </div>
    )
}

export default ChangingDiv;