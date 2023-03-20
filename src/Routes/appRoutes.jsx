import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Pages/Home/Home";
import LogIn from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/SignUp/Signup";
import Bar from "../Components/Sidebar/Sidebar";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Bar />}>
          <Route path="" element={<Navbar />}>
            <Route
              path="/"
              element={<Navigate to="/home" element={<Home />} />}
            />

            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default Routers;
