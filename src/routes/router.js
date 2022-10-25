import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../Layout/Main";
import Login from "../shared/Login";
import SIgnup from "../shared/SIgnup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SIgnup></SIgnup>,
      },
      {
        path: "/courses",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Home></Home>,
      },
    ],
  },
]);
