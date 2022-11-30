import React from 'react';
import './PostPreview.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPostInfo} from "../_features/postSlice";

function PostPreview(props) {
    const dispatch=useDispatch();

    return (
        <div className="post_preview"
        onClick={()=>dispatch(setPostInfo({
            postId: props.postId,
            title: props.title,
            content: props.content,
            writer: props.writer,
            regDate: props.regDate,
            hits: props.hits,
            comments: props.comments,
            imgURL: props.imgURL,
        }))}>
            {/*클릭하면 게시글 상세 페이지로 이동*/}
            <Link to="postDetail">
                <img className="post_preview_img"
                     src={props.imgURL}
                     alt=""/>
                <div className="post_preview_info">
                    <p className="post_preview_title">{props.title}</p>
                    <p className="post_preview_content">{props.content}</p>
                    <p className="padding_15px"></p>
                    <div className="post_preview_info_row">
                        <p className="post_preview_info_small">작성자</p>
                        <p className="post_preview_writer">{props.writer}</p>
                        <p className="post_preview_info_small">.</p>
                        <p className="post_preview_date">{props.regDate}</p>
                    </div>
                    <div className="post_preview_info_row">
                        <p className="post_preview_info_small">조회수</p>
                        <p className="post_preview_views">{props.hits}</p>
                        <p className="post_preview_info_small">.</p>
                        <p className="post_preview_info_small">댓글수</p>
                        <p className="post_preview_comments">{props.comments}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PostPreview;