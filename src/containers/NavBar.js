import React from 'react';
import "./NavBar.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../_features/userSlice";

function NavBar() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log(user);
        if (user) {
            //로그아웃
            axios.get('http://localhost:8080/login/logout', {withCredentials: true}).then(function (response) {
                navigate('/');
                alert('로그아웃');
                dispatch(logout());
                console.log('로그아웃');
            }).catch(function (error) {
                console.log(`Error Message: ${error}`);
            })
        }
    }

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
                <Link to={!user && '/login'}>
                    <span onClick={handleLogout}>{user ? '로그아웃' : '로그인하기'}</span>< /Link>
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