import React from 'react';
import './PostDetailPage.css';
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";

function PostDetailPage() {
    return (
        <div className="post_detail_page">
            <NavBar />
            <div className="post_detail_info">
                <p className="post_detail_title">정보보호 1주차</p>

                <div className="post_detail_row">
                    <Avatar  />
                    <div style={{paddingLeft: '10px', display: 'flex', flexDirection:'column', justifyContent:'center'}}>
                        <div className="post_detail_row">
                            <p className="post_detail_row_padding">작성자</p>
                            <p className="post_detail_writer post_detail_row_padding" > 민주</p>
                        </div>
                        <div className="post_detail_row">
                            <p className="post_detail_date post_detail_row_padding">2022.11.11</p>
                            <p className="post_detail_row_padding">조회수 : </p>
                            <p className="post_detail_views post_detail_row_padding">10</p>
                            <p className="post_detail_row_padding">댓글 : </p>
                            <p className="post_detail_comments post_detail_row_padding">10</p>
                        </div>
                    </div>
                </div>

                <hr style={{margin: '20px 0px'}}/>

                <p className="post_detail_content" >
                    대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면서 사람들 사이의 거래도 컴퓨터간의 통신을 통해 처리하는 비율이 상당히 높아지게 되었다. 또한 금융거래정보 등과 같은 민감하고 중요한 개인정보들도 컴퓨터와 네트워크를 통해 수집, 저장, 전송되는 일이 흔히 발생하게 되면서 정보를 안전하게 보호하는 영역이 중요한 학문의 하나로 대두되었다.
                    대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면서 사람들 사이의 거래도 컴퓨터간의 통신을 통해 처리하는 비율이 상당히 높아지게 되었다. 또한 금융거래정보 등과 같은 민감하고 중요한 개인정보들도 컴퓨터와 네트워크를 통해 수집, 저장, 전송되는 일이 흔히 발생하게 되면서 정보를 안전하게 보호하는 영역이 중요한 학문의 하나로 대두되었다.
                    대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면서 사람들 사이의 거래도 컴퓨터간의 통신을 통해 처리하는 비율이 상당히 높아지게 되었다. 또한 금융거래정보 등과 같은 민감하고 중요한 개인정보들도 컴퓨터와 네트워크를 통해 수집, 저장, 전송되는 일이 흔히 발생하게 되면서 정보를 안전하게 보호하는 영역이 중요한 학문의 하나로 대두되었다.
                    대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면서 사람들 사이의 거래도 컴퓨터간의 통신을 통해 처리하는 비율이 상당히 높아지게 되었다. 또한 금융거래정보 등과 같은 민감하고 중요한 개인정보들도 컴퓨터와 네트워크를 통해 수집, 저장, 전송되는 일이 흔히 발생하게 되면서 정보를 안전하게 보호하는 영역이 중요한 학문의 하나로 대두되었다.
                    대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면서 사람들 사이의 거래도 컴퓨터간의 통신을 통해 처리하는 비율이 상당히 높아지게 되었다. 또한 금융거래정보 등과 같은 민감하고 중요한 개인정보들도 컴퓨터와 네트워크를 통해 수집, 저장, 전송되는 일이 흔히 발생하게 되면서 정보를 안전하게 보호하는 영역이 중요한 학문의 하나로 대두되었다.
                </p>
            </div>

        </div>
    );
}

export default PostDetailPage;