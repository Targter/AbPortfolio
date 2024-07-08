import "./App.css";
import React, { useEffect, useState } from "react";
import Page from "./Component/Page";
import Navbar from "./Component/Navbar";
import About from "./Component/Page1";
import Box3Container from "./Component/Page2";
import Box5Container from "./Component/Page3";
import Box6container from "./Component/Page3ContactForm";
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
          <Route exact path="/" element={<Page />} />
          <Route
            exact
            path="Skills"
            element={<About ClickForBg={ClickForBg} />}
          />
          <Route
            exact
            path="Work-experience"
            element={<Box3Container ClickForBg={ClickForBg} />}
          />
          <Route exact path="Projects" element={<Box5Container />} />
          <Route exact path="ContactMe" element={<Box6container />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
