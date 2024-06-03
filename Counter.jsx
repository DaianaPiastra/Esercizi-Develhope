import { useState, useRef, useEffect } from "react";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef(null);

    const handlerIncrement = () => {
        setCounter((c) => c + 1);
    };

    const handlerDecrement = () => {
        setCounter((c) => c - 1);
    };

    const handlerReset = () => {
        setCounter(initialValue);
    };

    useEffect(() => {
        const newDirection = counter > initialValue ? "up" : counter < initialValue ? "down" : "reset"

        if (directionRef.current !== newDirection) {
            directionRef.current = newDirection;
            console.log(directionRef.current);
        }
    }, [counter, initialValue]);

    return (
        <div>
            <h2>Ho contato fino a {counter}</h2>
            <button onClick={handlerIncrement}>Incrementa</button>
            <button onClick={handlerDecrement}>Decrementa</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
    );
}
