import "@/App.scss";
import About from "@/pages/About";
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
    // path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <About />,
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
