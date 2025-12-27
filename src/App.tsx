
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import OnSale from './Pages/OnSale';
import NewArrivals from './Pages/NewArrivals';
import Brands from './Pages/Brands';
import type { JSX } from 'react';
import Category from './Pages/Category';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {path: "/", element: <Home /> },
      {path: "/onSale", element: <OnSale /> },
      {path: "/newArrivals", element: <NewArrivals /> },
      {path: "/brands", element: <Brands /> },
      {path: "/category/:category", element: <Category /> },
    ]
  }
];

const router = createBrowserRouter(routes);

function App(): JSX.Element {

  return <RouterProvider router={router} />;
}

export default App
