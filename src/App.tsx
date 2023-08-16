import "@/App.scss";
import {Error404} from "@/pages/Error404/index.tsx";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proyectos",
    element: <Projects />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
