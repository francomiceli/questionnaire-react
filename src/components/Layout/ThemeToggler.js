import { useTheme } from "../../store/theme-context";
import Switch from "react-switch";
import "./ThemeToggler.css";

const ThemeToggler = () => {
    const {theme, setTheme} = useTheme();
    const handleThemeToggle = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
      }
    return(
        <span className="toggle-theme-action">
            <Switch 
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={'#eee'}
            onChange={handleThemeToggle} 
            checked={theme === 'light'}/>
        </span>
    );
}

export default ThemeToggler;