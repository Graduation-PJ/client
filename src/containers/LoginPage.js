import React, {useState} from 'react';
import './LoginPage.css';
import NavBar from "./NavBar";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function LoginPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // function a()
        // {
        //     axios.post('http://localhost:8080/login/process',
        //         {
        //             userId: id,
        //             userPassword: password,
        //         },
        //         {
        //             withCredentials: true,
        //         }).then(response =>{console.log(response); console.log('post')})
        //         .catch((error)=>console.log(1));
        //     axios.get('http://localhost:8080/', {withCredentials:true}).then();
        // }
        //
        // a();
        // try{
        //     const response= await axios.post('http://localhost:8080/api/login/process', {
        //         userId: id, userPassword: password
        //     });
        //     const response2= await axios.get('http://localhost:8080/api/');
        //     console.log("response>>", response2.data);
        // }catch(error){
        //     console.log(error);
        // }
        //
        axios.post('http://localhost:8080/login/process', {
            userId: id, userPassword: password
        }, {withCredentials: true}).then(function (response) {
            navigate('/');
            alert('환영합니다 ~');

            axios.get('http://localhost:8080/', {withCredentials: true}
            ).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            })

        }).catch(function (error) {
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