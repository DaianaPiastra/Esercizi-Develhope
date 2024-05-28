import { useState } from "react"

export function UseGithubUser() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(null)

    async function fetchGithubUser(username) {
      setLoading(true)
      setError(null)
    
          try {
             setLoading(true);
             const response = await fetch(`https://api.github.com/users/${username}`);
             const json = await response.json();

             if (response.statu !== 200) {
                 setError(new Error('User not found'))  
             } 

             setData(json);
          } catch (error) {
             setError(error);
             setData(null)
          } finally {
             setLoading(false);
          }
       }
    

       return {data, error, loading, onFetch: fetchGithubUser}
}