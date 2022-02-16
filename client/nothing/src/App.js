import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Dashboardview from "./components/dashboard/Dashboardview";
import Viewdata from "./components/dashboard/Viewdata";
import Signinform from "./components/form/Signinform";
import Signupform  from "./components/form/Signupform";


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Signinform />} />
          <Route path="/signup" element={<Signupform />}  />
          <Route path="/dashboardview" element={<Dashboardview />} />
          <Route path="/viewdata" element={<Viewdata />} />
        </Routes>
      </Router>
  );
}

export default App;
