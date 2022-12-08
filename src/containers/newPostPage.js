import React, {useEffect, useRef, useState} from 'react';
import './newPostPage.css';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import Markdown from "marked-react";

import H1 from "../_img/H1.svg";
import H2 from "../_img/H2.svg";
import H3 from "../_img/H3.svg";
import H4 from "../_img/H4.svg";
import Bold from "../_img/Format bold.svg";
import Italic from "../_img/Format italic.svg";
import LinkImg from "../_img/Link.svg";
import ImageImg from "../_img/Image.svg";
import Code from "../_img/Code.svg";
import Line from "../_img/Line 3.svg";
import PreviewPicture from "../_img/PreviewPicture.svg";
import axios from "axios";
import {useSelector} from "react-redux";
import {selectPost} from "../_features/postSlice";

function NewPostPage() {
    //post 수정
    const post=useSelector(selectPost);

    const [inputTitle, setInputTitle] = useState("");  //제목 저장
    const [inputCategory, setInputCategory]=useState("");  //카테고리 저장
    const [inputContent, setInputContent] = useState("");  //입력한 내용 저장
    const [markDownContent, setMarkDownContent] = useState("");  //마크다운 내용 저장
    let insertMarkDown;
    const scrollFocus = useRef();
    const markDownFocus = useRef();  //markdown tool 사용시 내용 입력창에 focus 줌
    const textAreaRef=useRef();  //사진 삽입시 내용입력칸이 늘어나야함.
    const imgReference=useRef();  //img
    const markdownImgReference= useRef();
    const markDownScrollRef= useRef();

    useEffect(()=>{
        if(post){
            setInputTitle(post.title);
            setInputContent(post.content);
            setMarkDownContent(post.content);
        }
    },[]);

    //발행 버튼 클릭 이벤트
    const handleSubmitPost = (e) => {
        e.preventDefault();

        if(post){  //수정된 post 발행
            axios.put("http://localhost:8080/board/myList/update", {postId: post.postId, title: inputTitle, content: inputContent}, {withCredentials: true})
                .then()
                .catch();
        }else{
            //새로운 post 발행
            axios.post('http://localhost:8080/board/writing',{title: inputTitle, content: inputContent, category: inputCategory, uploadDate: new Date()}, {withCredentials:true}
            ).then(function (response){
                alert('글이 발행되었습니다.');
                setInputTitle("");
                setInputContent("");
                setMarkDownContent("");
            }).catch(function(error){
                console.log(error);
            });
        }
    }

    //markDown tools
    const MarkDownH1 = (e) => {
        e.preventDefault();
        insertMarkDown = "\n# ";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownH2 = (e) => {
        e.preventDefault();
        insertMarkDown = "\n## ";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownH3 = (e) => {
        e.preventDefault();
        insertMarkDown = "\n### ";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownH4 = (e) => {
        e.preventDefault();
        insertMarkDown = "\n#### ";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownBold = (e) => {
        e.preventDefault();
        insertMarkDown = "\n****";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownItalic = (e) => {
        e.preventDefault();
        insertMarkDown = "\n**";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownLink = (e) => {
        e.preventDefault();
        insertMarkDown = "\n[링크에 사용할 이름](url)";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownImg = (e) => {
        e.preventDefault();
        insertMarkDown = "\n![이미지 이름](이미지파일경로.jpg)";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "50px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }
    const MarkDownCode = (e) => {
        e.preventDefault();
        insertMarkDown = "\n```\n코드를 입력하세요\n```";

        setInputContent(inputContent + insertMarkDown);
        markDownFocus.current.focus();  //커서 위치 input textarea에 맞춤
        //textarea 크기 확장
        markDownFocus.current.style.height = "300px";
        markDownFocus.current.style.height = markDownFocus.current.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
    }

    //내용 입력 칸이 늘어난다.
    const resize = (obj) => {
        obj.target.style.height = "1px";
        obj.target.style.height = obj.target.scrollHeight + "px";
        window.scrollTo(0, document.body.scrollHeight);  //스크롤 위치 맨 아래에 고정
        // markDownScrollRef.
    }

    const replaceBrTag = (content) => {
        setInputContent(content); //사용자가 입력한 내용 그대로 저장
        content = content.replace(/\n/ig, '\n\n');
        setMarkDownContent(content);  //엔터키 마크다운 문법 반영
    }

    //이미지 업로드
    const loadFile=(e)=>{
        var file= e.target.files[0];

        const newImage= imgReference.current;
        newImage.src=URL.createObjectURL(file);
        newImage.style.width="500px";
        newImage.style.visibility="visible";

        const textAreaScroll= textAreaRef.current;
        console.log(textAreaRef);
        // textAreaScroll.style.height=
        const markdownNewImage= markdownImgReference.current;
        markdownNewImage.src=URL.createObjectURL(file);
        markdownNewImage.style.width="500px";
        markdownNewImage.style.visibility="visible";
    }

    return (
        <div ref={scrollFocus} className="new_post_page">
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
                        <button className="menu_link menu_save" type="text" onClick={handleSubmitPost}><Link
                            to="/">발행</Link></button>
                    </div>
                </div>
                {/*글 작성 공간*/}
                <div className="writing_post_container">
                    {/*제목 입력*/}
                    <input type="text" className="writing_post_input_title" placeholder="제목을 입력하세요." required
                           value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    <hr/>
                    <div style={{position:"sticky", top:"0px", background: "white", paddingBottom:"20px"}}>
                        <div className="markdown_tools_container">
                            <img className="markdown_tool tool_hover" src={H1} alt="" onClick={MarkDownH1}/>
                            <img className="markdown_tool tool_hover" src={H2} alt="" onClick={MarkDownH2}/>
                            <img className="markdown_tool tool_hover" src={H3} alt="" onClick={MarkDownH3}/>
                            <img className="markdown_tool tool_hover" src={H4} alt="" onClick={MarkDownH4}/>
                            <img className="markdown_tool" src={Line} alt=""/>
                            <img className="markdown_tool tool_hover" src={Bold} alt="" onClick={MarkDownBold}/>
                            <img className="markdown_tool tool_hover" src={Italic} alt="" onClick={MarkDownItalic}/>
                            <img className="markdown_tool" src={Line} alt=""/>
                            <img className="markdown_tool tool_hover" src={LinkImg} alt="" onClick={MarkDownLink}/>
                            <img className="markdown_tool tool_hover" src={ImageImg} onClick={MarkDownImg} alt=""/>
                            <img className="markdown_tool tool_hover" src={Code} alt="" onClick={MarkDownCode}/>
                            {/*이미지 파일 업로드*/}
                            <label htmlFor="chooseFile" style={{height: "36px"}}>
                                <img className="markdown_tool tool_hover" src={PreviewPicture} alt=""/>
                            </label>
                            <input type="file" id="chooseFile" name="picture" size="50" accept="image/*"
                                   onChange={loadFile}/>
                        </div>
                    </div>
                    {/*업로드 내용 입력*/}
                    <img ref={imgReference} src={ImageImg} style={{width:"0px", visibility: "hidden"}} />
                    <textarea ref={textAreaRef} className="writing_post_input_content" placeholder="내용을 입력하세요." required
                              value={inputContent} onChange={(e) => replaceBrTag(e.target.value)}
                              onKeyDown={resize} onKeyUp={resize} ref={markDownFocus}/>
                </div>
            </div>
            {/*작성한 글 미리보기 페이지*/}
            <div className="markdown_post">
                <NavBar/> {/*작성한 글 미리보기 페이지 네비게이션 바*/}
                <div ref={markDownScrollRef} className="markdown_post_container" >
                    <div className="markdown_title">
                        <p>{inputTitle}</p>
                    </div>
                    <div className="markdown_content">
                        <img ref={markdownImgReference} src={ImageImg} style={{width:"0px", visibility: "hidden"}} />
                        <Markdown>{markDownContent}</Markdown>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewPostPage;