import Buttons from './buttons';
import ChangingDiv from './changingDiv';

import { ThemeContext } from '../providers/theme';

const HomePage = () => {
//   const themeCtx = useContext(ThemeContext);

  return <div  className="Main-div">
    <Buttons/>
    <ChangingDiv/>
  </div>
};

export default HomePage;