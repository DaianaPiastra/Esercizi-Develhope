import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
    const [date, setDate]= useState(new Date())
    const language= useContext(LanguageContext)
    
    useEffect(()=>{
        const intervalID =setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(intervalID)
    }, [date])

    return (
        <div>
        <p>{ language === 'en'? `The current time is: ${date.toLocaleTimeString()}`
        :`L'ora corrente è:${date.toLocaleTimeString()} ` }

        </p>
     </div>
    ) 
}