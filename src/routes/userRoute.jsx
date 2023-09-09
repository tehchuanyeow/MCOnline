import { Home } from "../pages/Home/Home";
import Voting from "../pages/Home/Voting";
import ProfilePage from "../pages/ProfilePage";
import SponsorAuction from "../pages/SponsorAuction";
import UploadServer from "../pages/UploadServer";
import UserList from "../pages/UserList";

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
