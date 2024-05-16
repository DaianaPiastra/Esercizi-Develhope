import { Button } from "./Button"

export function AlertClock () {
     function handleButtonClick(params) {
        const now= new Date()

        alert (`The current time is ${now.toLocaleTimeString()}`)
    }

    return (
        <div>
            <p>Click the button below to show the current time:</p>
            <Button onClick={handleButtonClick} label='Click me!'/>
        </div>
    )
    
}