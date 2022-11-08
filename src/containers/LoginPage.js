import React, {useState} from 'react';
import './LoginPage.css';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

function LoginPage() {
    const [id, setId]= useState("");
    const [password, setPassword]= useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
    }

    return (
        <div className="login_page">
            <NavBar />

            <div className="login_container">
                <Link to="/">
                    <span className="logo" style={{fontSize: "50px"}}>로고</span>
                </Link>

                    <form>
                        <input type="text" placeholder="아이디"
                               value={id} onChange={(e)=>setId(e.target.value)} />
                        <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button className="login_sign_in_button" type="submit" onClick={handleLogin}>로그인하기</button>
                    </form>

                <div className="link_to_register">
                    <span>아직 계정이 없으신가요?</span>
                    <Link to="/register">
                        <span className="register_link">회원가입하기</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;