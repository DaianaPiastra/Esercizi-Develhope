import React from "react"
import {Link, Route, Routes} from "react-router-dom"
import {Container} from "./Container"
import { Welcome } from "./Components/Welcome"
import { ShowGithubUser } from "./ShowGithubUser"
import { GithubUser } from "./GithubUser"



export function App() {
  
    
    return (
        <div>
            <Container title={ 
            <div>
                <h1>My awesome application</h1>
                <hr />
            </div> }>
             <Routes>
               <Route path="/" element={ <Welcome/>} />
               <Route path="/users" element={<GithubUser/>} />
               <Route path="/:username" element={<ShowGithubUser/>} />

            </Routes>   
            </Container>
          
        </div>
       
         
    )
}


