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
      console.log(value)
      if (!value) {
        setIsFieldInvalid(true);
      } else {
        setIsFieldInvalid(false);
      }
    }

    return (
        <div className="Changing-div"
          style={themeCtx.theme ? { background: "#2c3137" } : { background: "#e3e5e8" }}>
            <Inputs name='number' type='text' placeholder='put some number' onChange={handleChangeNotValid} isNotValid={isFieldInvalid}/>
            <Inputs name='text' type='text' placeholder='put some text' onChange={handleChange}/>
            <div className="Indicator"
              style={themeCtx.theme ? { background: "#e3e5e8", color: '#2c3137' } : { background: "#2c3137", color: '#e3e5e8' }}>
                {themeCtx.theme ? 'Night' : 'Day'}
              </div>
        </div>
    )
}

export default ChangingDiv;