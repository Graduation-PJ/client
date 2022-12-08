import React, {useState} from 'react';
import './LoginPage.css';
import NavBar from "./NavBar";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {login} from "../_features/userSlice";
import {useDispatch} from "react-redux";

function LoginPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/login/process', {
                userId: id, userPassword: password}, {withCredentials: true}
        ).then(function (response) {
            axios.get('http://localhost:8080/', {withCredentials: true},
            ).then(function (response) {
                console.log(response.data);
                dispatch(login({  //로그인
                    uid: response.data
                }))
            }).catch(function (error) {
                console.log(error);
            })

            navigate('/');
            alert('환영합니다 ~');
        }).catch(function (error) {
            alert('아이디 또는 비밀번호를 잘못 입력했습니다.\n다시 로그인 해주세요.');
            console.log(`Error Message: ${error}`);
        })
        setId("");
        setPassword("");
    };

    return (
        <div className="login_page">
            <NavBar/>

            <div className="login_container">
                <Link to="/">
                    <span className="logo" style={{fontSize: "50px"}}>로고</span>
                </Link>

                <form>
                    <input type="text" placeholder="아이디"
                           value={id} onChange={(e) => setId(e.target.value)}/>
                    <input type="password" placeholder="비밀번호" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
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