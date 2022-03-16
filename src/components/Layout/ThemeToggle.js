import { useContext } from "react";
import { ThemeContext } from "../../App";
import Switch from "react-switch";


const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const handleThemeToggle = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
      }
    return(
        <div>
            <Switch 
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={'#eee'}
            onChange={handleThemeToggle} checked={theme === 'light'}/>
        </div>
    );
}

export default ThemeToggle;