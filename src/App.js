import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Outside from "./pages/Outside";
import Diary from "./pages/Diary";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

/* Months */
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
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/outside" element={<Outside />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/snowflakes" element={<Mypage />} />

          {/* Months */}
          <Route path="/diary/january" element={<January />} />
          <Route path="/diary/february" element={<February />} />
          <Route path="/diary/march" element={<March />} />
          <Route path="/diary/april" element={<April />} />
          <Route path="/diary/may" element={<May />} />
          <Route path="/diary/june" element={<June />} />
          <Route path="/diary/july" element={<July />} />
          <Route path="/diary/august" element={<August />} />
          <Route path="/diary/september" element={<September />} />
          <Route path="/diary/october" element={<October />} />
          <Route path="/diary/november" element={<November />} />
          <Route path="/diary/december" element={<December />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
