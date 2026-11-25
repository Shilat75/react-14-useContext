import "../style.css"
import { useThemeContext } from "../context/AppContext";

function Content(){
    const {theme}=useThemeContext();
return (
    <div className="divCard">
        <div className={`card ${theme}`}>
          <h1>Card1</h1>
          <p>hey my name is Shilat and i'm living in Beer Sheva</p>
        </div>

         <div className={`card ${theme}`}>
          <h1>Card2</h1>
          <p>hey my name is Shilat and i'm living in Beer Sheva</p>
        </div>

         <div className={`card ${theme}`}>
          <h1>Card3</h1>
          <p>hey my name is Shilat and i'm living in Beer Sheva</p>
        </div>
    </div>
)

}

export default Content;