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
        if (user) {  //로그인 되어있는 상태 : 로그아웃
            axios.get('http://localhost:8080/login/logout', {withCredentials: true}).then(function (response) {
                navigate('/');
                dispatch(logout());
            }).catch(function (error) {
                console.log(`Error Message: ${error}`);
            })
        }
    }

    const handleLogIn=()=>{
        if(!user){
            alert('로그인이 필요합니다.');
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
                    <Link to={user && '/newPost'}>
                        <span onClick={handleLogIn}>글쓰기</span></Link>
                    </span>
                {/*마이페이지 링크*/}
                <span className="menu_link">
                    <Link to={user && '/myPage'}>
                        <span onClick={handleLogIn}>마이페이지</span></Link>
                    </span>

            </div>
        </div>
    );
}

export default NavBar;