import React, {useEffect,useState} from 'react';
import './MyPage.css';
import axios from "axios";
import NavBar from "./NavBar";

function MyPage() {
    const [nickName, setNickName]=useState();
    const [introComment, setIntroComment]=useState();
    const [email, setEmail]=useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            setNickName(response.data.nickname);
            setIntroComment(`안녕하세요 주니어 개발자입니다.^ㅁ^`);
            setEmail(response.data.email);
        }).catch(function (error) {
            console.log(error);
        })
    },[]);

    return (
        <div className="my_page">
            <NavBar />
            <div className="my_page_container">
                <p>
                    {nickName}
                    {introComment}
                    {email}</p>

            </div>
        </div>
    );
}

export default MyPage;