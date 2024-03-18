import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Categories from "@/pages/categories/Categories";
import CategoryForm from "@/pages/categories/CategoryForm";
import Subcategories from "@/pages/subcategories/Subcategories";

const routes = createBrowserRouter([
  {
    path : "/",
    element : <SignIn />
  },
  {
    path : "/auth/sign-in",
    element : <SignIn />
  },
  {
    path : "/auth/sign-up",
    element : <SignUp />,
  },
  {
    path : "/dashboard",
    element : <Dashboard/>, 
    children : [
      {
        path : "",
        element : <Navigate to="/dashboard/home" replace/>
      },
      {
        path : "home",
        element : <Home/>
      },
      {
        path : "profile",
        element : <Profile/>,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/add",
        element: <CategoryForm />
      },
      {
        path: "blogs",
        element: <h1>Blogs</h1>
      },
      {
        path: "subcategories",
        element: <Subcategories/>
      }
    ]
  }
])

export default routes;
