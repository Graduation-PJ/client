import React from 'react';
import './Comment.css';
import {Avatar} from "@mui/material";

function Comment(props) {
    return (
        <div className="comment">
            <div className="comment_row ">
                <Avatar />
                <div style={{margin:"0px 15px"}}>
                    <p>{props.nickName}</p>
                    <p>{props.comment}</p>
                    <div className="comment_row comment_row_center">
                        <p>{props.date}</p>
                        {/*<button>답글</button>*/}
                    </div>
                </div>
            </div>
            <hr style={{borderColor:"var(--color-main"}} />
        </div>
    );
}

export default Comment;