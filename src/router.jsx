import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todolist from "./pages/Todolist";
import { ROUTE_PATH } from "./constants";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_PATH.SIGNUP}
          element={<Signup />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTE_PATH.SIGNIN}
          element={<Signin />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTE_PATH.TODO}
          element={<Todolist />}
          errorElement={<ErrorPage />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
