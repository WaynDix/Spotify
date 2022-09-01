import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./components/Support";
import SupportConnect from "./components/SupportConnect";
import Premium from "./components/Premium";
import Pay from "./components/Pay";
import Pop from "./components/PopSong/Pop";
import AddMusic from "../src/components/AddM/AddMusic";

import Regestration from "../src/pages/Registration";
import Login from "../src/pages/Login";
import PasswordReset from "../src/pages/PasswordReset";
import ConfirmPasswordReset from "../src/pages/ConfirmPasswordReset";



const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<Regestration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route
          path="/confirmpasswordreset"
          element={<ConfirmPasswordReset />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support-connect" element={<SupportConnect />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/pay-premium" element={<Pay />} />
        <Route path="/pop-songs" element={<Pop />} />
        <Route path="/add-song" element={<AddMusic />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
