import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Outside from "./pages/Outside";
import Diary from "./pages/Diary";
import Start from "./pages/Start";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/outside" element={<Outside />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
