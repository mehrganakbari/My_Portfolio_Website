import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import OopBlog from "./pages/blogs/oop/oop";
import ReactBlog from "./pages/blogs/react/react";
import ReactVsVueBlog from "./pages/blogs/react_vue/react_vue";
import ContactMe from "./pages/contact_me/contcat_me";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact-me",
          element: <ContactMe />,
        },
        {
          path: "/what-is-oop",
          element: <OopBlog />,
        },
        {
          path: "/what-is-react",
          element: <ReactBlog />,
        },
        {
          path: "/react-vs-vue",
          element: <ReactVsVueBlog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

function NavbarWrapper() {
  return (
    <>
      <Outlet />
    </>
  );
}
