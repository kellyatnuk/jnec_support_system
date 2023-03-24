import "./App.css";
import NavbarComp from "./component/NavbarComp/NavbarComp";
import HomeComp from "./component/HomeComp/HomeComp";
import RegisterComp from "./component/RegisterComp/RegisterComp";
import LoginComp from "./component/LoginComp/LoginComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
