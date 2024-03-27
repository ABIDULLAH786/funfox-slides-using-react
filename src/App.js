import { Route, Routes } from "react-router-dom";
import Slide1 from "./pages/slide1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Slide1/>} />
      </Routes>
    </>
  );
}

export default App;
