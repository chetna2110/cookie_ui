import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from "./components/hero/Hero.jsx"
import Grid from "./components/grid/Grid.jsx"
import Grid2 from "./components/grid/Grid2.jsx"
import BlogHero from './components/blog/BlogHero.jsx'
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import Sign from './components/signin/Sign.jsx'
import Register from './components/signup/register.jsx'
import Bloggrid from './components/blog/bloggrid.jsx'
import Docs from './components/docs/Docs.jsx'
import GridComponent from './components/grid/GridComponent.jsx'

const clerk_key=import.meta.env.VITE_CLERK_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <Hero />
            <Grid />
          </>
        ),
      },
      {
        path: "categories",
        element: (
          <>
            <Grid />
            <Grid2 />
          </>
        ),
      },
      {
        path: "signin",
        element: <Sign />,
        children: [
          {
            path: "signup",
            element: <Register />,
          },
        ],
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "blog",
        element: 
          <>
            <BlogHero />
            <Bloggrid/>
          </>
        
      },
      {
        path:"docs",
        element:<Docs/>
      },
      {
        path: "/categories/:categoryId",
        element: <GridComponent />,
      },
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
