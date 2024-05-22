import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { MyList } from "./MyList";
import { Container } from "./Container";


export function App() {
    return (
        <Container title={<h1>My Awesome Application</h1>}>
         <Welcome name='Kate' age={24}/>
         <Counter/>
         <MyList items={[
            {id:1, name:'Kate', age:24},
            {id:2, name:'Jane', age:32},
            {id:3, name:'John', age:23},
            {id:4, name:'Billy', age:40}
         ]}/>
        </Container>
    )
}


