import { AlertClock } from "./AlertClock";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";


export function App() {
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr/>
            <Welcome name='John'age={24}/>
            <AlertClock/>
        </div>
    )
}


