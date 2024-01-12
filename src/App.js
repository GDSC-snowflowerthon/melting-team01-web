import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { FallingSnow, Snowflake } from "./components/Snowflake";

import Outside from "./pages/Outside";
import Diary from "./pages/Diary";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

/* Months */
// 내 파일 불러오기
import January from "./pages/January";
import February from "./pages/February";
import March from "./pages/March";
import April from "./pages/April";
import May from "./pages/May";
import June from "./pages/June";
import July from "./pages/July";
import August from "./pages/August";
import September from "./pages/September";
import October from "./pages/October";
import November from "./pages/November";
import December from "./pages/December";

function App() {
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기
  return (
    <BrowserRouter>
      <div className="App">
        <FallingSnow />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path={`/snowman/${memberId}`} element={<Outside />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path={`/snowflakes/${memberId}`} element={<Mypage />} />

          {/* Months */}
          <Route path={`/diary/${memberId}/january`} element={<January />} />

          <Route path={`/diary/${memberId}/february`} element={<February />} />
          <Route path={`/diary/${memberId}/march`} element={<March />} />
          <Route path={`/diary/${memberId}/april`} element={<April />} />
          <Route path={`/diary/${memberId}/may`} element={<May />} />
          <Route path={`/diary/${memberId}/june`} element={<June />} />
          <Route path={`/diary/${memberId}/july`} element={<July />} />
          <Route path={`/diary/${memberId}/august`} element={<August />} />
          <Route
            path={`/diary/${memberId}/september`}
            element={<September />}
          />
          <Route path={`/diary/${memberId}/october`} element={<October />} />
          <Route path={`/diary/${memberId}/november`} element={<November />} />
          <Route path={`/diary/${memberId}/december`} element={<December />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
