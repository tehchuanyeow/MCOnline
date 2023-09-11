import { Home } from "../pages/Home/Home";
import Voting from "../pages/Home/Voting";
import { Login } from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import { Register } from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import SponsorAuction from "../pages/SponsorAuction";
import UploadServer from "../pages/UploadServer";
import UserList from "../pages/UserList";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const userRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/user-profile",
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/voting",
    element: <Voting />,
  },
  {
    path: "/sponsor",
    element: <SponsorAuction />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/upload-server",
    element: <UploadServer />,
  },
];
