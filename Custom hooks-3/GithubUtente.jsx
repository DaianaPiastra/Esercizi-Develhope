import { useState } from "react"
import { UseGithubUser } from "./UseGithubUser"

  
export function GithubUtente() {  
    const {error, loading, data, onFetch}= UseGithubUser()
    const [newUser, setNewUser]= useState()

   function handleGetUserData() {
      onFetch(newUser)
   } 

    return (
        <div>
            <input type="text" value={newUser}  onChange={(e)=>setNewUser(e.target.value)}/>
            <button onClick={handleGetUserData}>Load your user data</button>
            {loading && <h1>Loading...</h1> }
            {data && <h1> {data.name} </h1> }
            {data && <img src={data.avatar_url} alt={data.name} /> }
            
        </div>
    )
}