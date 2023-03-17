import { useContext, useState } from "react";
import { ThemeContext } from '../providers/theme';

const Inputs = (props) => {
    const themeCtx = useContext(ThemeContext);

    const [value, setValue] = useState(props.text)
  
    const onType = (event) => {
      setValue(event.target.value);
      props.onChange(event.target.value);
    }
  
    return (
      <div>
        <input type='text' placeHolder={props.placeHolder} value={value} onChange={onType} style={themeCtx.theme ? { background: "#b09a96" } : { background: "#3d231a" }}/>
        {props.isNotValid && <p>* This field is invalid</p>}
      </div>
    );
  };
  
export default Inputs;