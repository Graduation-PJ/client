import React, {useEffect, useState} from 'react';
import './PostDetailPage.css';
import NavBar from "./NavBar";
import {Avatar} from "@mui/material";
import Markdown from "marked-react";
import {useSelector} from "react-redux";
import {selectPost} from "../_features/postSlice";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Comment from "../components/Comment";

function PostDetailPage() {
    const post = useSelector(selectPost);
    const navigate = useNavigate();
    const location = useLocation();
    const isWriter = location.state.isWriter.isWriter;  //글쓴이는 글 수정/삭제할 수 있음.
    const markDownContent = post.content;
    const [inputComment, setInputComment] = useState("");
    const [comments, setComments] = useState([]);  //댓글 저장
    const [countComment, setCountComment]=useState(0);  //댓글 수 저장
    const hitCount=post.hits+1;

    useEffect(() => {
        axios.post('http://localhost:8080/comment', {boardId: post.postId}, {withCredentials: true}
        ).then(function (response) {
            setComments(response.data);
            setCountComment(response.data.length);
        }).catch(function (error) {
            console.log(error);
        })

        console.log(hitCount);
        axios.put("http://localhost:8080/board/update_hits", {postId: post.postId, hits: hitCount} , {withCredentials: true})
            .then()
            .catch();

    }, []);

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

    const transmitComment = (e) => {
        var utc = new Date().getTime() + (9 * 60 * 60 * 1000);
        var kr_time = new Date(utc);
        var write_time = kr_time.toISOString().slice(0, 19).replace('T', ' ');

        axios.post('http://localhost:8080/comment/post',{writeTime: write_time,
            boardId: post.postId,
            content: inputComment}, {withCredentials: true}
        ).then(function (response) {
            setComments(response.data);
            alert("댓글이 작성되었습니다.");
        }).catch(function (error) {
            console.log(error);
        })
        navigate('/');
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
                                <p className="post_detail_row_padding">    조회수 : </p>
                                <p className="post_detail_views post_detail_row_padding">{hitCount}</p>
                                <p className="post_detail_row_padding">댓글 : </p>
                                {/*<p className="post_detail_comments post_detail_row_padding">{post.comments}</p>*/}
                                <p className="post_detail_comments post_detail_row_padding">{countComment}</p>
                            </div>
                            <div className="post_detail_row">
                                {/*글쓴이는 글을 수정/삭제할 수 있음. */}
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
                        <p>{countComment}개의 댓글</p>
                    </div>
                    <div className="post_detail_input_comment">
                        <textarea placeholder="댓글을 입력해주세요." value={inputComment}
                                  onChange={(e) => setInputComment(e.target.value)}/>
                        <button onClick={transmitComment}>댓글 남기기</button>
                    </div>

                    <div className="post_detail_comments">
                        {comments.map((element) => (
                            <Comment nickName={element.nickname} comment={element.content} date={element.write_time}/>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default PostDetailPage;