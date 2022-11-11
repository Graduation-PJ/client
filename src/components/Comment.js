import React from 'react';
import './Comment.css';
import {Avatar} from "@mui/material";

function Comment() {
    return (
        <div className="comment">
            <div className="comment_row ">
                <Avatar />
                <div style={{margin:"0px 15px"}}>
                    <p>성강</p>
                    <p>좋은 글 감사합니다. 데베시는 참 어렵네요...</p>
                    <div className="comment_row comment_row_center">
                        <p>2022. 11. 11 05.07</p>
                        <button>답글</button>
                    </div>
                </div>
            </div>
            <hr style={{borderColor:"var(--color-main"}} />
        </div>
    );
}

export default Comment;