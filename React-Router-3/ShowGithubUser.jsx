import React from "react";
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
    const {username}= useParams()

    return (
        <div>
            <h2>My Github User</h2>
            <GithubUser username={username}/>
        </div>
    )
}


// Aggiungi una nuova Route al percorso users/:username che esegue il rendering di un componente ShowGithubUser che riceve il nome utente come parametro di percorso ed esegue il rendering del componente GithubUser dal primo esercizio di recupero dati con fetch e useEffect passandogli il nome utente ricevuto.