import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";
import Newuser from "./pages/Newuser";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userid" element={<SingleUser />} />
            <Route path="new" element={<Newuser />} />
          </Route>
        </Route>
     
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
