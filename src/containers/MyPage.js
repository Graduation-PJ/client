import React, {useEffect,useState} from 'react';
import './MyPage.css';
import axios from "axios";
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";
import PostPreview from "../components/PostPreview";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function MyPage() {
    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                data: [1, 2, 3, 4, 5],
            },
        ],
    };

    const [nickName, setNickName]=useState();
    const [introComment, setIntroComment]=useState();
    const [email, setEmail]=useState();
    const [posts, setPosts]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            setNickName(response.data.nickname);
            setIntroComment(`안녕하세요 코린이입니다.^ㅁ^`);
            setEmail(response.data.email);
        }).catch(function (error) {
            console.log(error);
        })
        //글 정보가 다 안온다
        axios.get('http://localhost:8080/board/myList', {withCredentials: true}
        ).then(function (response) {
            setPosts(response.data);
        }).catch(function (error) {
            console.log(error);
        })

        //contribution
        axios.get('http://localhost:8080/board/myList', {withCredentials: true}
        ).then(function (response) {
            setPosts(response.data);
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

                <div className="landing_page_post_container">
                    {posts.map((element)=>(
                        <PostPreview key={element.id} postId={element.id} title={element.title} content={element.content}
                                     writer={element.writer} regDate={element.regDate} hits={element.hits} comments={element.comments}
                                     imgURL="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjZfMjI4%2FMDAxNjY2NzIxOTIxNjk4.XEujLVjuXmu5lou860nFu97yWbWUdth6tHiQHRl5UBUg.W55nUYehJB_sFqqWfsjW0PilQVJBwzTlyZE5XyNK2f0g.PNG.xxunju%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%2528882%2529.png&type=sc960_832"/>
                    ))}
                </div>

                <div className="my_contribution">
                    <Line data={data}/>
                </div>
            </div>
        </div>
    );
}

export default MyPage;