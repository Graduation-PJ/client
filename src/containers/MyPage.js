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
    const [nickName, setNickName]=useState();
    const [introComment, setIntroComment]=useState();
    const [email, setEmail]=useState();
    const [posts, setPosts]= useState([]);
    const [contribution, setContribution]= useState([]);
    const getImgSrcRegExp = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/;
    const data = {
        labels: ['1일', '2일', '3일', '4일', '5일', '6일', '7일','8일','9일','10일',
            '11일', '12일', '13일', '14일', '15일', '16일', '17일','18일','19일','20일',
            '21일', '22일', '23일', '24일', '25일', '26일', '27일','28일','29일','30일'],
        datasets: [
            {
                type: 'line',
                label: 'Contribution',
                data: contribution,
                borderColor: '#ff7e5f',
                borderWidth: 2,
            },
        ],
    };

    const options={
        maintainAspectRatio: false,
        // xAxis:{
        //     visible:false,
        // },
        scales: {
            x:{
                display:false,
            },
            y: {
                // display: false,
                min: 0,
                max: 10,
                stepSize: 1,
            },
            xAxis:{
                visible: false,
                // minorGridLineWidth: 0,
            },
            // yAxis:{
            //     visible: false,
            //     minorGridLineWidth: 0,
            // },
        }
    };

    useEffect((url, config)=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            console.log(response.data);
            setNickName(response.data.nickname);
            // setIntroComment(response.data.intro_comment);
            setIntroComment(`안녕하세요 코린이입니다.^ㅁ^`);
            setEmail(response.data.email);
        }).catch(function (error) {
            console.log(error);
        })
        //글 정보가 다 안온다
        axios.get('http://localhost:8080/board/myList', {withCredentials: true}
        ).then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        }).catch(function (error) {
            console.log(error);
        })

        //contribution
        // {params: {dateString: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`}},
        axios.get(`http://localhost:8080/contributionData?dateString=${new Date().getFullYear() + '-' + (new Date().getMonth()+1)}`, {withCredentials: true}).then(function (response) {
            console.log(response.data);
            setContribution(response.data)
        }).catch(function (error) {
            console.log(error);
        })
        console.log(posts);
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
                <h4>{new Date().getFullYear() + '년 ' + (new Date().getMonth()+1)+'월'}</h4>
                <div className="my_contribution" style={{display: "flex", justifyContent: "center"}}>
                    <Line data={data} options={options} style={{width: "90vw" ,height: "20vh"}}/>
                </div>
            </div>
            <div className="landing_page_post_container" style={{width: "80%", marginLeft :"auto", marginRight: "auto"}}>
                {posts.map((element)=>(
                    //댓글 수 추가해야함.
                    <PostPreview key={element.id} postId={element.board_id} title={element.title} content={element.content}
                                 writer={element.nickname} regDate={element.upload_date} hits={element.hit_count} comments={element.comments}
                                 imgURL={getImgSrcRegExp.exec(element.content) !== null ? getImgSrcRegExp.exec(element.content)[1]: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjZfMjI4%2FMDAxNjY2NzIxOTIxNjk4.XEujLVjuXmu5lou860nFu97yWbWUdth6tHiQHRl5UBUg.W55nUYehJB_sFqqWfsjW0PilQVJBwzTlyZE5XyNK2f0g.PNG.xxunju%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%2528882%2529.png&type=sc960_832"} />
                ))}
            </div>
        </div>
    );
}

export default MyPage;