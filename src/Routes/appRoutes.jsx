import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import LogIn from "../Components/Pages/Login/Login";
import Search from "../Components/Pages/Search/Search";
import Signup from "../Components/Pages/SignUp/Signup";
import Bar from "../Components/Sidebar/Sidebar";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Bar />}>
          <Route
            path="/"
            element={<Navigate to="/home" element={<Home />} />}
          />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};
export default Routers;
