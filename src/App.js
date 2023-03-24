import "./App.css";
import NavbarComp from "./component/NavbarComp/NavbarComp";
import HomeComp from "./component/User/HomeComp/HomeComp";
import RegisterComp from "./component/User/RegisterComp/RegisterComp";
import LoginComp from "./component/LoginComp/LoginComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarComp />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/register" element={<RegisterComp />} />
          <Route path="/login" element={<LoginComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
