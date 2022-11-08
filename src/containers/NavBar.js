import React from 'react';
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="nav_bar">
            <Link to="/">
                <div className="logo">
                    <span>로고</span>
                </div>
            </Link>

            <div className="nav_menu">
                {/*로그인하기 링크*/}
                <span className="menu_link">
                <Link to="/login">로그인하기</Link>
                </span>
                {/*글쓰기 링크*/}
                <span className="menu_link">
                <Link to="/newPost">글쓰기</Link>
                </span>
                {/*마이페이지 링크*/}
                <span className="menu_link">
                <Link to="/myPage">마이페이지</Link>
                </span>

            </div>
        </div>
    );
}

export default NavBar;