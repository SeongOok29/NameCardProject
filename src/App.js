import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CardHolder from './pages/CardHolder';
import MyPage from './pages/MyPage';
import Notification from './pages/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cardholder" element={<CardHolder />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
