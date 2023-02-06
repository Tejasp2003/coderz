import React from "react";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Welcome from "./components/Welcome.jsx";
import Notification from "./components/Notification.jsx";
import Profile from "./components/Profile.jsx";
import Events from "./components/Events.jsx";
import Settings from "./components/Settings.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Project from "./components/Project.jsx";
import Postdemo from "./components/Postdemo.jsx";
import Post from "./components/Post.jsx";


function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<SignUp />} />
          {/* <Route exact path="/home" element={<Home />} /> */}
          {/* <Route exact path="/" element={<Welcome />} /> */}
          <Route exact path="/notifications" element={<Notification />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/home" element={<Postdemo />} />
          <Route exact path="/post" element={<Post />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
