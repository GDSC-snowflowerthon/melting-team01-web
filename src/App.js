import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Outside from "./pages/Outside";
import Diary from "./pages/Diary";
import Start from "./pages/Start";
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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/diary" element={<Diary />} />

          {/* Months */}
          <Route path="/january" element={<January />} />
          <Route path="/february" element={<February />} />
          <Route path="/march" element={<March />} />
          <Route path="/april" element={<April />} />
          <Route path="/may" element={<May />} />
          <Route path="/june" element={<June />} />
          <Route path="/july" element={<July />} />
          <Route path="/august" element={<August />} />
          <Route path="/september" element={<September />} />
          <Route path="/october" element={<October />} />
          <Route path="/november" element={<November />} />
          <Route path="/december" element={<December />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
