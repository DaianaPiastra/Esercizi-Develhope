import { useState } from "react"

export function Counter({initialValue = 0}) {
    const [counter, setCounter]= useState(initialValue)
    const handlerIncrement= ()=>{
        setCounter((c) => c+1)
    }
    const handlerDecrement= ()=>{
        setCounter((c)=> c-1)
    }
    const handlerReset= ()=> {
        setCounter(initialValue)
    }

    return (
        <div>
            <h2>I have counted to {counter}</h2>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handlerDecrement}>Decrement</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
    )
}