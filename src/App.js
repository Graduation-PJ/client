import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./containers/LandingPage"
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NewPostPage from "./containers/newPostPage";
import MyPage from "./containers/MyPage";
import PostDetailPage from "./containers/PostDetailPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>

                    <Route path="/newPost" element={<NewPostPage/>}/>
                    <Route path="/postDetail" element={<PostDetailPage/>}/>
                    <Route path="/myPage" element={<MyPage/>}/>
                    <Route path="/myPage/postDetail" element={<PostDetailPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
