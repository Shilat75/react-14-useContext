import "../style.css"
import { useThemeContext } from "../context/AppContext";


function Footer(){
  const {theme}=useThemeContext();

    return(
        <footer className="footerDown">
          {`Theme:${theme}`}
        </footer>
    )
}
export default Footer;