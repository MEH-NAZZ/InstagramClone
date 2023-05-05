import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../../Pages/Home";
import Explore from "../../Pages/Explore";
import Messages from "../../Pages/Messages";
import Create from "../../Pages/Create";
import Profile from "../../Pages/Profile";
import Reels from "../../Pages/Reels";

const Navigations = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};
export default Navigations;
