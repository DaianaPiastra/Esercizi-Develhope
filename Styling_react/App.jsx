import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { MyList } from "./MyList";


export function App() {
    return (
        <div className="app">
         <Welcome name='Kate' age={24}/>
         <Counter/>
         <MyList items={[
            {id:1, name:'Kate', age:24},
            {id:2, name:'Jane', age:32},
            {id:3, name:'John', age:23},
            {id:4, name:'Billy', age:40}
         ]}/>
        </div>
    )
}


