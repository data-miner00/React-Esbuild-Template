import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
