import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  

  // Error page
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
