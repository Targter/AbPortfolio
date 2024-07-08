import "./App.css";
import React, { useEffect, useState } from "react";
import Page from "./Component/Page";
import Navbar from "./Component/Navbar";
import About from "./Component/Page1";
import Box3Container from "./Component/Page2";
import Box5Container from "./Component/Page3";
import Box6container from "./Component/Page3ContactForm";
import { Navigate, Outlet } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PrivateRoute = () => {
  let auth = { token: true }; // Replace with your authentication logic
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

//

const App = () => {
  const [ShowDarkBg, SetDarkBg] = useState([]);
  const ClickForBg = (arr) => {
    SetDarkBg(arr);
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar ShowDarkBg={ShowDarkBg} ClickForB1g={ClickForBg}></Navbar>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Page />} />
            <Route path="/Skills" element={<About ClickForBg={ClickForBg} />} />
            <Route
              path="/Work-experience"
              element={<Box3Container ClickForBg={ClickForBg} />}
            />
            <Route path="/Projects" element={<Box5Container />} />
            <Route path="/ContactMe" element={<Box6container />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
