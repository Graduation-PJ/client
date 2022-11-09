import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import axios from "axios";

function LandingPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8080/'
        ).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        })
    })

    return (
        <div className="landing_page">
            <NavBar />
            landing page
        </div>
    );
}

export default LandingPage;