import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import NavBar from './components/views/NavBar/NavBar'
import Footer from './components/views/Footer/Footer'
import UploadVideoPage from './components/views/UploadVideoPage/UploadVideoPage'
import VideoDetailPage from './components/views/VideoDetailPage/VideoDetailPage'
import Auth from './hoc/auth'
import { Suspense } from 'react';

    /* 
    Auth option
    null => 아무나 출입이 가능한 페이지
    true => 로그인한 유저만 출입이 가능한 페이지
    false => 로그인한 유저는 출입 불가능한 페이지

    adminRoute
    true => admin만!
    */

function App() {
  return (
    <Suspense fallback={(<div> Loading ... </div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'clac(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
