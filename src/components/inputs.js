import { useContext, useState } from "react";
import { ThemeContext } from '../providers/theme';

const Inputs = (props) => {
    const themeCtx = useContext(ThemeContext);

    const [value, setValue] = useState('');
    const [inputErr, setInputErr] = useState('');
  
    const onType = (event) => {
      console.log('Value =>', event.nativeEvent.data);
      setValue(event.target.value);
      props.onChange(event.target.value);
      if (!isNaN(event.target.value) ) {
        setInputErr('');
      } else {
        setInputErr('* This field is not valid (enter the number)');
      }
    }

    return (
      <div className="Inputs">
        <input name={props.name} type={props.type} placeholder={props.placeholder} value={value} onChange={onType} style={themeCtx.theme ? { background: "#e3e5e8" } : { background: "#dbd5d2" }}/>
        {props.isNotValid && <p>* Complete the field</p>}
        {inputErr && <p>* This field is not valid (enter the number)</p>}
      </div>
    );
  };
  
export default Inputs;