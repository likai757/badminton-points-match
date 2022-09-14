import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Team from './pages/Team';
import Matching from './pages/Matching';
import Game from './pages/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="team/:userId" element={<Team />} />
      <Route path="matching">
        <Route path=":type/:teamId/" element={<Matching />} />
      </Route>
      <Route path="game">
        <Route path=":type/:teamAId/:teamBId" element={<Game />} />
      </Route>

    </Routes>
  </BrowserRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
