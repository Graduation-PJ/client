import React, {useState} from 'react';
import './RegisterPage.css';
import NavBar from "./NavBar";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/signUp/success', {
            userId: id, userPassword: password, email: email, nickname: nickName
        }).then(function (response) {
            //회원가입 성공했을 때
            navigate('/login');
            alert(`${nickName}님 환영합니다~`);
        }).catch(function (error) {
            console.log(`Error Message: ${error}`);
        });
    }

    return (
        <div className="register_page">
            <NavBar/>

            <div className="register_container">
                <Link to="/">
                    <span className="logo" style={{fontSize: "50px"}}>로고</span>
                </Link>

                <form>
                    <p>아이디</p>
                    <input type="text" placeholder="아이디"
                           value={id} onChange={(e) => setId(e.target.value)}/>
                    <p>비밀번호</p>
                    <input type="password" placeholder="비밀번호" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <p>비밀번호 재확인</p>
                    <input type="password" placeholder="비밀번호 재확인" />
                    <p>닉네임</p>
                    <input type="text" placeholder="닉네임"
                           value={name} onChange={(e) => setName(e.target.value)}/>
                    <p>이메일</p>
                    <input type="text" placeholder="이메일"
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button className="login_sign_in_button" type="submit" onClick={handleRegister}>회원가입하기</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;