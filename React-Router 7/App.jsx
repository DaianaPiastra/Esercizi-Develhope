import React from "react"
import { Link, Route, Routes} from "react-router-dom"
import { Welcome } from "./Components/Welcome"
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";





export function App() {
	return (
        <div>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/users">Github User List</Link> | 
            <Link to="/">Back</Link>
        </nav>
        <hr />
        <Routes>
            <Route path="/" element={<Welcome name="Daiana" />} />
            <Route path="/users" element={<GithubUserList />}>
                <Route path=":username" element={<ShowGithubUser />} />
                <Route index element={ <p>Add a user and select it</p> }/>
            </Route>
            <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
    </div>
	);
}


