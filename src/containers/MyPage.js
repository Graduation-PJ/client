import React, {useEffect,useState} from 'react';
import './MyPage.css';
import axios from "axios";
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";
import PostPreview from "../components/PostPreview";

function MyPage() {
    const [nickName, setNickName]=useState();
    const [introComment, setIntroComment]=useState();
    const [email, setEmail]=useState();
    const [posts, setPosts]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            console.log(response);
            setNickName(response.data.nickname);
            setIntroComment(`안녕하세요 코린이입니다.^ㅁ^`);
            setEmail(response.data.email);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get('http://localhost:8080/board/myList', {withCredentials: true}
        ).then(function (response) {
            setPosts(response.data);
            console.log(response);
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
                <div className="landing_page_post_container">
                    {posts.map((element)=>(
                        <PostPreview key={element.id} postId={element.id} title={element.title} content={element.content}
                                     writer={element.writer} regDate={element.regDate} hits={element.hits} comments={element.comments}
                                     imgURL="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjZfMjI4%2FMDAxNjY2NzIxOTIxNjk4.XEujLVjuXmu5lou860nFu97yWbWUdth6tHiQHRl5UBUg.W55nUYehJB_sFqqWfsjW0PilQVJBwzTlyZE5XyNK2f0g.PNG.xxunju%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%2528882%2529.png&type=sc960_832"/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyPage;