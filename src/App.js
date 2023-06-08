import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Dashboard/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Online_Test from "./Components/Online_Test/Online_Test";
import ShowResult from "./Components/Online_Test/ShowResult";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import { LoggedInUser } from "./Components/Login/LoggedInUser";

const isAuth = LoggedInUser() == null ? false : true;
function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<Login isAuth={isAuth} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="Home" element={<Home />} />
            <Route path="Online_Test" element={<Online_Test />} />
            <Route path="ShowResult" element={<ShowResult />} />
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
