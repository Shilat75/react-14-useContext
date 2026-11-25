
//import { AppContext } from "./context/AppContext";
import {ThemeContext} from "./context/AppContext.jsx"
//import UserProfile from  "../src/componnent/UserProfile"
import { useState } from "react";
import Header from "./componnent/Header.jsx";
import Content from "./componnent/Content.jsx";
import Footer from "./componnent/Footer.jsx";



function App(){
//const name = "Alice";

const [theme,setTheme]=useState("light")

function toggleTheme(){
  if(theme==="light"){
      setTheme("dark")}
  else if (theme==="dark"){
      setTheme("light")
  }    
}

return(

  <div>
   {/* <AppContext.Provider value={name}> */}
  <ThemeContext.Provider value={{theme,toggleTheme}}>

    <Header/>
    <Content/>
    <Footer/>

   </ThemeContext.Provider > 

  </div>
)

}

export default App;