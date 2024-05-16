import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate]= useState(new Date())
    
    useEffect(()=>{
        const intervalID=setInterval(() => {
            setDate(new Date())
        }, 1000);
    }, [])

    return (
        <div>
        <p>The current time is: {date.toLocaleTimeString()}</p>
     </div>
    ) 
}