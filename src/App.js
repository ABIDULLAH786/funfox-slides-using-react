import { Route, Routes } from "react-router-dom";
import Slide1 from "./pages/slide1";
import './global.scss'
import Slide2 from "./pages/slide2";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
      </Routes>
    </>
  );
}

export default App;
