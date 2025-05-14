import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Wishlist from "./routes/Wishlist.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Apparels from "./routes/Apparels.jsx";
import BeautySkin from "./routes/BeautySkin.jsx";
import Footwears from "./routes/Footwears.jsx";
import Backpacks from "./routes/Backpacks.jsx";
import AllCategories from "./routes/AllCategories.jsx"
import LoginForm from "./routes/LoginForm.jsx";
import Profile from "./routes/Profile.jsx";
import SignUpForm from "./routes/SignUpForm.jsx";

const router = createBrowserRouter([
  {
    
  
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/apparels", element: <Apparels /> },
      { path: "/beauty&skin", element: <BeautySkin /> },
      { path: "/footwears", element: <Footwears /> },
      { path: "/bags", element: <Backpacks /> },
      { path: "/all", element: <AllCategories /> },
      { path: "/profile", element: <Profile /> },










    ],
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/register", element: <SignUpForm /> },
  { path: "/logout", element: <LoginForm /> },



],
{ basename:"/ProjectEcom"}
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
