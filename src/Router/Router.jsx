import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllTourist from "../Pages/AllTourist";
import AddTourist from "../Pages/AddTourist";
import MyList from "../Pages/MyList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DetailSpot from "../Pages/DetailSpot";
import UpdateSpot from "../Pages/UpdateSpot";
import Country from "../Pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://tourism-nexus-server-assign-10.vercel.app/spot"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltourist",
        element: <AllTourist></AllTourist>,
        loader: () =>
          fetch("https://tourism-nexus-server-assign-10.vercel.app/spot"),
      },
      {
        path: "/addtourist",
        element: (
          <PrivateRoute>
            <AddTourist></AddTourist>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://tourism-nexus-server-assign-10.vercel.app/spot"),
      },
      {
        path: "/detailspot/:id",
        element: (
          <PrivateRoute>
            <DetailSpot></DetailSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-nexus-server-assign-10.vercel.app/spot/${params.id}`
          ),
      },
      {
        path: "/updatespot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-nexus-server-assign-10.vercel.app/spot/${params.id}`
          ),
      },
      {
        path: "/:name",
        element: <Country></Country>,
        loader: () =>
          fetch("https://tourism-nexus-server-assign-10.vercel.app/spot"),
      },
    ],
  },
]);

export default router;
