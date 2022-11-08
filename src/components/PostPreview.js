import React from 'react';
import './PostPreview.css';
import {Link} from "react-router-dom";

function PostPreview() {
    return (
        <div className="post_preview">
            {/*클릭하면 게시글 상세 페이지로 이동*/}
            <Link to="postDetail">
                <img className="post_preview_img"
                     src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjZfMjI4%2FMDAxNjY2NzIxOTIxNjk4.XEujLVjuXmu5lou860nFu97yWbWUdth6tHiQHRl5UBUg.W55nUYehJB_sFqqWfsjW0PilQVJBwzTlyZE5XyNK2f0g.PNG.xxunju%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%2528882%2529.png&type=sc960_832"
                     alt=""/>
                <div className="post_preview_info">
                    <p className="post_preview_title">정보보호 1주차</p>
                    <p className="post_preview_content">대다수의 사람들이 컴퓨터를 이용해 업무를 처리하고 그 컴퓨터들이 네트워크를 통해 서로 연결되면</p>
                    <p className="padding_15px"></p>
                    <div className="post_preview_info_row">
                        <p className="post_preview_info_small">작성자</p>
                        <p className="post_preview_writer">민주</p>
                        <p className="post_preview_info_small">.</p>
                        <p className="post_preview_date">2022. 11. 11</p>
                    </div>
                    <div className="post_preview_info_row">
                        <p className="post_preview_info_small">조회수</p>
                        <p className="post_preview_views">3</p>
                        <p className="post_preview_info_small">.</p>
                        <p className="post_preview_info_small">댓글수</p>
                        <p className="post_preview_comments">3</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PostPreview;