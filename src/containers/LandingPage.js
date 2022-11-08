import React from 'react';
import './LandingPage.css';
import NavBar from "./NavBar";
import PostPreview from "../components/PostPreview";

function LandingPage() {
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