import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Adventure from "../pages/Adventure";
import Resume from "../pages/Resume";
import Memories from "../pages/Memories";
import Collection from "../pages/Collection";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "adventure/",
        element: <Adventure />
      },
      {
        path: "resume/",
        element: <Resume />
      },
      {
        path: "memories/",
        element: <Memories />
      },
      {
        path: "collection/",
        element: <Collection />
      },
    ],
    errorElement: <ErrorPage />
  }
];

const Router = createBrowserRouter(routes);

export default Router;
