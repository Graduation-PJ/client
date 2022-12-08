import React, {useEffect, useState} from 'react';
import './LandingPage.css';
import NavBar from "./NavBar";
import axios from "axios";
import PostPreview from "../components/PostPreview";

function LandingPage() {
    const [posts, setPosts]= useState([]);
    const getImgSrcRegExp = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/;

    useEffect( ()=>{
        axios.get('http://localhost:8080/board/list', {withCredentials: true}
        ).then(function (response) {
            // console.log(response.data);
            setPosts(response.data);
            // console.log(posts);
            // setPictures(...[pictures], posts.map((element)=>{
            //     return element.content;
            // }));
            // posts.map((element)=>{
            //     setPictures(element.content);
            // });
            // console.log(pictures);

        }).catch(function (error) {
            console.log(error);
        })

        // {console.log(pictures)};
        // posts.map((element)=>{
        //     // console.log(element);
        //     setPictures(element);
        //     console.log(pictures);
        // }

    },[]);

    return (
        <div className="landing_page">
            <NavBar />
            <div className="landing_page_post_container">
                {
                    posts.map((element)=>(
                        <PostPreview key={element.id} postId={element.board_id} title={element.title} content={element.content}
                                     writer={element.nickname} regDate={element.upload_date} hits={element.hit_count} comments={element.comments}
                                     imgURL={getImgSrcRegExp.exec(element.content) !== null ? getImgSrcRegExp.exec(element.content)[1]: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjZfMjI4%2FMDAxNjY2NzIxOTIxNjk4.XEujLVjuXmu5lou860nFu97yWbWUdth6tHiQHRl5UBUg.W55nUYehJB_sFqqWfsjW0PilQVJBwzTlyZE5XyNK2f0g.PNG.xxunju%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%2528882%2529.png&type=sc960_832"} />
                    ))
                }
            </div>
        </div>
    );
}

export default LandingPage;