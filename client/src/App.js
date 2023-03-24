import "./App.css";
import NavbarComp from "./component/NavbarComp/NavbarComp";
import HomeComp from "./component/HomeComp/HomeComp";
import RegisterComp from "./component/RegisterComp/RegisterComp";
import LoginComp from "./component/LoginComp/LoginComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomeComp from "./component/Admin/AdminHomeComp/AdminHomeComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/admin" element={<AdminHomeComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
