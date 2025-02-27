import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Hero from "./components/hero/Hero.jsx";
import Grid from "./components/grid/Grid.jsx";
import Grid2 from "./components/grid/Grid2.jsx";
import BlogHero from "./components/blog/BlogHero.jsx";
import Bloggrid from "./components/blog/bloggrid.jsx";
import Docs from "./components/docs/Docs.jsx";
import GridComponent from "./components/grid/GridComponent.jsx";
import Blogdetails from "./components/blog/Blogdetails.jsx";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/SignUp.jsx";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout with Nav/Footer
    children: [
      { path: "", element: <Hero /> },
      { path: "categories", element: <><Grid /><Grid2 /></> },
      { path: "blog", element: <><BlogHero /><Bloggrid /></> },
      { path: "docs", element: <Docs /> },
      { path: "categories/:categoryId", element: <GridComponent /> },
      { path: "blog/:blogId", element: <Blogdetails /> },
    ],
  },
  {
    path: "/auth", // Separate layout for auth pages
    element: <Layout />, // Layout without Nav/Footer
    children: [
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
