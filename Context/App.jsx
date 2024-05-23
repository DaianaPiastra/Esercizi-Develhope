
import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";


export function App() {
  const [language, setLanguage]= useState('en')
    function handleLanguageChange(event) {
        setLanguage(event.target.value)
    }

    
    return (
        <div>
          <LanguageContext.Provider value={language}>
          <select onChange={handleLanguageChange} value={language}>
             <option value='en'>EN</option>
             <option value='it'>IT</option>
             </select>
           <Clock/> 
          </LanguageContext.Provider>
          

           
        </div>
       
         
    )
}


