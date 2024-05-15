import { HelloWorld } from "./HelloWorld";

export function Welcome ({name, age}) {
    return (
        <div>
          {name? <h2>Welcome, {name}!</h2>: <HelloWorld/> } 
          {Boolean(age)  && <p>You are {age} years old</p>} 
          {age===0 && <p>You are very young!</p>}
          
          {age>18 && <p>Your age: {age} is greater then 18.</p>}
          {age && <p>Your age is present!</p>}
          {age> 18 && age<65 && <p>Your age: {age} is greater then 18 and less then 65.</p>}
          {age> 18 && age<65 && name==='John' && <p>Jhon age: {age} is greater then 18 and less then 65.</p>}
          

        </div> 
    ) 
}