import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todolist from "./pages/Todolist";
import { ROUTE_PATH } from "./constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.SIGNUP} element={<Signup />} />
        <Route path={ROUTE_PATH.SIGNIN} element={<Signin />} />
        <Route path={ROUTE_PATH.TODO} element={<Todolist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
