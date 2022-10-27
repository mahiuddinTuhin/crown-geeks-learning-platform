import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/courses/CourseDetails";
import Courses from "../components/courses/Courses";
import Error404 from "../components/Error404";
import FAQ from "../components/FAQ/FAQ";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import HomeContainer from "../shared/HomeContainer";
import Login from "../shared/Login";
import SIgnup from "../shared/SIgnup";
import Terms from "../shared/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeContainer></HomeContainer>,
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
        loader: async () => {
          return fetch("https://crown-geeks-server-i7su.vercel.app/courses");
        },
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://crown-geeks-server-i7su.vercel.app/course/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
