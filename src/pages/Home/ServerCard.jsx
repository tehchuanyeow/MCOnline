import { Link } from "react-router-dom";

const ServerCard = ({ serverData, showModal }) => {
  const { title, thumbnail, serverImage, serverName, views } = serverData;
  return (
    <div onClick={showModal}>
      <img className="rounded-md" src={thumbnail} alt="thumbnail" />
      <div className="flex gap-2 mt-2">
        <Link to="/profile">
          <img
            className="w-8 h-8 rounded-full"
            src={serverImage}
            alt="server_pro_pic"
          />
        </Link>
        <div className="flex-1">
          <h6>{title}</h6>
          <h6 className="text-sm">{serverName}</h6>
          <div className="flex gap-2">
            <h6 className="text-xs">{views}k views</h6>
            <h6 className="text-xs">7 months ago</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
