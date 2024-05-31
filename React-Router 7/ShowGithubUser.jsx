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


