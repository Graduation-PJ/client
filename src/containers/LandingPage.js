import React, {useEffect, useState} from 'react';
import './LandingPage.css';
import NavBar from "./NavBar";
import axios from "axios";
import PostPreview from "../components/PostPreview";

function LandingPage() {
    // useEffect(()=>{
    //     axios.get('http://localhost:8080/', {withCredentials: true}
    //     ).then(function (response) {
    //         console.log(response)
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    // })

    return (
        <div className="landing_page">
            <NavBar />
            <div className="landing_page_post_container">
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
            </div>
        </div>
    );
}

export default LandingPage;