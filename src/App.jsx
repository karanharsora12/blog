import { Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
