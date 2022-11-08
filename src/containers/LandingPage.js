import React from 'react';
import NavBar from "./NavBar";
import PostPreview from "../components/PostPreview";

function LandingPage() {
    return (
        <div className="landing_page">
            <NavBar />
            <PostPreview />
        </div>
    );
}

export default LandingPage;