import React from 'react';
import './PostPreview.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPostInfo} from "../_features/postSlice";
import {selectUser} from "../_features/userSlice";

function PostPreview(props) {
    const dispatch=useDispatch();
    const user= useSelector(selectUser);  //login할때 nickname도 받아와야겠다..
    var isWriter=false;

    const showPostDetail=(e)=>{
        if(user){
            if(user.uid.valueOf()==props.userId.valueOf()){
                isWriter="true";
            }else{
                isWriter="false";
            }
        }

        dispatch(setPostInfo({
            postId: props.postId,
            userId: props.userId,
            title: props.title,
            content: props.content,
            writer: props.writer,
            regDate: props.regDate,
            hits: props.hits,
            comments: props.comments,
            imgURL: props.imgURL,
            isWriter: isWriter,
        }))
    }

    return (
        <div className="post_preview"
        onClick={showPostDetail}>
            {/*클릭하면 게시글 상세 페이지로 이동*/}
            <Link to="postDetail" state={{isWriter: {isWriter}}}>
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