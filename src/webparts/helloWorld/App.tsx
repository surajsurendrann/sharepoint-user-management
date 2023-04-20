import "./App.css";
import * as React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Update from "./pages/Update";
import Profile from "./pages/Profile";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/update" element={<Update />} />
      <Route path="/profile/:userId" element={<Profile />} />
    </Routes>
  );
}

export default App;
