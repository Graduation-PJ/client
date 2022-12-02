import React, {useEffect} from 'react';
import './PostDetailPage.css';
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";
import Markdown from "marked-react";
import Comment from "../components/Comment";
import {useSelector} from "react-redux";
import {selectPost} from "../_features/postSlice";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function PostDetailPage() {
    const post = useSelector(selectPost);
    const navigate = useNavigate();
    const location= useLocation();
    const isWriter=location.state.isWriter.isWriter;

    const markDownContent = post.content;
    // '## 몇가지 용어 \n' +
    // '> - 데이터 : 컴퓨터에 저장되어있고, 보낼 수 있는 모든 정보\n' +
    // '> - 데이터베이스 : **구조를 가진** 데이터의 모임\n' +
    // '> - 데이터 모델 : 데이터를 저장, 연결, 접근하는 방식 ex) Relational-Model\n' +
    // '> - DBMS(Database Management System) : 데이터베이스에 있는 데이터를 관리하는 소프트웨어\n' +
    // '> - Query : DBMS에 정보를 요정하는 문장\n' +
    // '\n' +
    // '### Database Schema vs Database Instance\n' +
    // '> - Database Schema : 데이터베이스의 구조. meatadata라 한다. \n' +
    // '> ex) department(dept_name, building, budget)\n' +
    // '> - Database Instance : 실제 데이터. table에 들어있는 tuples\n' +
    // '\n' +
    // '## 데이터베이스 시스템\n' +
    // '> ![](https://velog.velcdn.com/images/kksshh0612/post/355e133e-3bf0-4fec-92c0-1a65a9a249a8/image.png)\n' +
    // '> - 데이터베이스 시스템 특징 \n' +
    // '> 1. 데이터가 최소한의 중복으로 결합되어있다. \n' +
    // '> 2. 동시에 많은 사용자가 같은 데이터베이스에 접근할 수 있다.\n' +
    // '> 3. 사용자/관리자를 구분하는 것처럼, 여러 다른 view를 제공한다. \n' +
    // '> 4. 사용자가 유효한 정보를 입력하고 데이터 무결성을 유지할 수 있도록 특정 제약 조건을 적용한다.\n' +
    // '> 5. 백업과 복구가 가능하다. \n' +
    // '\n' +
    // '## SQL(Structured Query Language)\n' +
    // '> 데이터베이스에 접근하고 관리할 때 쓰는 언어로, 절차지향 언어이다.\n' +
    // '> ![](https://velog.velcdn.com/images/kksshh0612/post/6a2855b4-9139-4dc6-9697-c7c09b87ca77/image.png)\n' +
    // '> - DDL : 데이터를 정의하는 언어 (테이블을 만들고 수정하는 언어)\n' +
    // '> - DML : 데이터를 조작하는 언어 (데이터를 찾고, 삽입하고, 삭제하고, 수정하는 언어)\n' +
    // '> - DCL : 데이터를 보호하는 언어 \n' +
    // '> - TCL : 데이터의 보안, 무결성, 복구, 동시접근을 관리하는 언어 \n' +
    // '\n' +
    // '**meta-data == system catalog == data dictionary**\n'

    const postModify = (e) => {  //게시글 수정 버튼
        e.preventDefault();
        navigate("/newPost");
    }

    const postDelete = (e) => {  //게시글 삭제 버튼
        e.preventDefault();
        axios.delete('http://localhost:8080/board/myList/delete', {data: {postId: post.postId}, withCredentials: true}
        ).then(function (response) {
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="post_detail_page">
            <NavBar/>
            <div className="post_detail_info">
                <p className="post_detail_title">{post.title}</p>

                <div className="post_detail_row">
                    <Avatar/>
                    <div style={{
                        width: '100%',
                        paddingLeft: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <div className="post_detail_row">
                            <p className="post_detail_writer post_detail_row_padding"> {post.writer}</p>
                        </div>
                        <div className="post_detail_row_mod">
                            <div className="post_detail_row">
                                <p className="post_detail_date post_detail_row_padding">{post.regDate}</p>
                                <p className="post_detail_row_padding">조회수 : </p>
                                <p className="post_detail_views post_detail_row_padding">{post.hits}</p>
                                <p className="post_detail_row_padding">댓글 : </p>
                                <p className="post_detail_comments post_detail_row_padding">{post.comments}</p>
                            </div>
                            <div className="post_detail_row">
                                <button className={isWriter ? "post_modify" : "post_modify_hidden"}
                                        onClick={postModify}>수정
                                </button>
                                <button className={isWriter ? "post_modify" : "post_modify_hidden"}
                                        onClick={postDelete}>삭제
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{margin: '20px 0px'}}/>

                <div className="post_detail_content">
                    <Markdown>{markDownContent}</Markdown>
                </div>

                <div className="post_detail_comments">
                    <div className="post_detail_row">
                        <p style={{fontWeight: "bold", paddingRight: "5px"}}>{post.comments}</p>
                        <p>개의 댓글</p>
                    </div>
                    <div className="post_detail_input_comment">
                        <textarea placeholder="댓글을 입력해주세요."></textarea>
                        <button>댓글 남기기</button>
                    </div>

                    <div className="post_detail_comments">
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default PostDetailPage;