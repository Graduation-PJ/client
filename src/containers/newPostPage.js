import React, {useState} from 'react';
import './newPostPage.css';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

function NewPostPage() {
    const [inputTitle, setInputTitle]= useState("");  //제목 저장
    const [inputContent, setInputContent]= useState("");  //내용 저장

    //발행 버튼 클릭 이벤트
    const handleSubmitPost=(e)=>{
        e.preventDefault();
    }

    //내용 입력 칸이 늘어난다.
    const resize=(obj)=>{
        obj.target.style.height="1px";
        obj.target.style.height=obj.target.scrollHeight+"px";
    }

    const showInputContent=(e)=>{

    }

    return (
        <div className="new_post_page">
            {/*글 작성 페이지*/}
            <div className="writing_post">
                <div className="writing_post_nav_bar"> {/*글쓰기 페이지 네비게이션 바*/}
                    <Link to="/">
                        <div className="writing_post_logo">
                            <span style={{color: "black"}}>로고</span>
                        </div>
                    </Link>
                    <div className="nav_menu">
                        <span className="menu_link">
                            <Link to="/">임시저장</Link>
                        </span>
                        <button className="menu_link menu_save" type="text" onClick={handleSubmitPost}><Link to="/">발행</Link></button>
                    </div>
                </div>
                {/*글 작성 공간*/}
                <div className="writing_post_container">
                    {/*제목 입력*/}
                    <input type="text" className="writing_post_input_title" placeholder="제목을 입력하세요." required
                           value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    <hr />
                    {/*업로드 내용 입력*/}
                    <textarea className="writing_post_input_content" placeholder="내용을 입력하세요." required
                              value={inputContent} onChange={(e) => setInputContent(e.target.value)}
                              onKeyDown={resize} onKeyUp={resize}/>
                </div>
            </div>
            {/*작성한 글 미리보기 페이지*/}
            <div className="markdown_post">
                <NavBar />  {/*작성한 글 미리보기 페이지 네비게이션 바*/}
                <div className="markdown_post_container">
                    <div className="markdown_title">
                        <p>{inputTitle}</p>
                    </div>
                    <div className="markdown_content">
                        {inputContent}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewPostPage;