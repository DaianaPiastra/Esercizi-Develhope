import { useEffect, useState } from "react";
import { GithubLogin } from "./GithubLogin";

export function GithubUser({ username }) {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   async function fetchGithubUser(username) {
      try {
         setLoading(true);
         const response = await fetch(`https://api.github.com/users/${username}`);
         const json = await response.json();
         setData(json);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchGithubUser(username);
   }, [username]);

   function handleSearch(newUsername) {
      fetchGithubUser(newUsername);
   }
   
   return (
      <div>
         <h1>Search your user:</h1>
         <div>
            <GithubLogin initialUsername={username} onSubmit={handleSearch} />
         </div>
         <div>
            {data && <h1>{data.name}</h1>}
            {data && <img src={data.avatar_url} alt={data.name} />}
            {loading && <p>Loading...</p>}
            {error && <p>There has been an error</p>}
         </div>
      </div>
   );
}
