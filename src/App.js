import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./containers/LandingPage"
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NewPostPage from "./containers/newPostPage";
import MyPage from "./containers/MyPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/newPost" element={<NewPostPage />} />
            <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
