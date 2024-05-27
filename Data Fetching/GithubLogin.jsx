import { useState } from "react";

export function GithubLogin({ initialUsername, onSubmit }) {
    const [username, setUsername] = useState(initialUsername);
 
    function handleInputChange(event) {
       const value = event.target.value;
       setUsername(value);
    }
    
    function handleOnSubmit(event) {
       event.preventDefault();
       onSubmit(username);
    }
 
    return (
       <div>
          <form onSubmit={handleOnSubmit}>
             <input onChange={handleInputChange} type="text" placeholder="users" value={username} />
             <button type="submit">Search</button>
          </form>
       </div>
    );
 }

//  crea un nuovo componente GithubLogin che abbia un modulo con un input di testo e un pulsante di invio.
// L'input verrà utilizzato per cercare un utente fornendo il suo nome utente.
// Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser.
// Questi componenti prenderanno l'username come oggetto di scena.
// 