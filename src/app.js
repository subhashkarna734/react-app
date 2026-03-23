import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer ";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";

const AppLayout = () => {
  return (
      <div className="app">
        <UserContext.Provider value={{loggedInUser : "subhash Kumar"}}>
          <Header />
        </UserContext.Provider>
        <Outlet />
        <Footer />
      </div>
    
  )
};
const Grocery = lazy(() => import("./components/Grocery"))
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: '/restaurant/:id',
        element: <RestaurentMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
