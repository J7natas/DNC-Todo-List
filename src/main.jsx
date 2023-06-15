import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/views/app/App";
import "./global.scss";
import { DeleteTarefa } from "./components/pages/deleteTarefa/deleteTarefa";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EditarTarefa } from "./components/pages/editaTarefa/editaTarefa";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/deleteTarefa',
    element: <DeleteTarefa />,
  },
  {
    path: '/EditarTarefa',
    element: <EditarTarefa />,
  },
])

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
