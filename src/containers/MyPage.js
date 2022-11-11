import React, {useEffect,useState} from 'react';
import './MyPage.css';
import axios from "axios";
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";

function MyPage() {
    const [nickName, setNickName]=useState();
    const [introComment, setIntroComment]=useState();
    const [email, setEmail]=useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            setNickName(response.data.nickname);
            setIntroComment(`안녕하세요 코린이입니다.^ㅁ^`);
            setEmail(response.data.email);
        }).catch(function (error) {
            console.log(error);
        })
    },[]);

    return (
        <div className="my_page">
            <NavBar />
            <div className="my_page_container">
                <div className="my_page_row">
                    <Avatar />
                    <div>
                        <p className="my_page_info" style={{fontSize:"16px"}}>{nickName}</p>
                        <p className="my_page_info" style={{fontSize:"14px"}}>{introComment}</p>
                    </div>
                </div>
                <hr style={{margin:"20px 0px"}}/>

                {/*<p>*/}
                {/*    {nickName}*/}
                {/*    {introComment}*/}
                {/*    {email}</p>*/}
            </div>
        </div>
    );
}

export default MyPage;