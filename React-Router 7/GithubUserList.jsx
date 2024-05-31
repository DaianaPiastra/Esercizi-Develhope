import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users`)
            .then((res) => res.json())
            .then((json) => setUsers(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {users.length > 0 && (
                <ul data-testid="users">
                    {users.map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.login}`}>{user.login}</Link>
                        </li>
                    ))}
                </ul>
            )}
            {error && <div>{error.message}</div>}
            {loading && <div>Loading...</div>}

            <Outlet />
        </div>
    );
}

// Crea un componente GithubUserList che recuperando questo URL API, https://api.github.com/users, mostri un elenco di collegamenti di nomi utente github.
// Facendo clic su un nome utente, verrà visualizzato il componente ShowGithubUser. Aggiungi una Route al percorso degli utenti che mostra il componente GithubUserList. In tal modo, rimuovi la rotta /users/:username dal componente App e aggiungi una nuova rotta nidificata all'interno della rotta /users.