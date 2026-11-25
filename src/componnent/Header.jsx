import { useThemeContext } from "../context/AppContext";
import "../style.css"

function Header(){
 const {theme,toggleTheme}=useThemeContext();
    return(
        <div>
        <h1>Hello Part2</h1>
        <button className= {theme} onClick={toggleTheme}>{theme}</button>
        </div>
       

    )

}

export default Header;