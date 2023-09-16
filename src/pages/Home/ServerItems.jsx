import thumb1 from "../../assets/thumb-1.jpg";
import thumb2 from "../../assets/thumb-2.jpg";
import thumb3 from "../../assets/thumb-3.jpg";
import { Modal } from "antd";
import ServerCard from "./ServerCard";
import { useState } from "react";
import { BiSend, BiSolidCategory, BiSolidUpvote } from "react-icons/bi";
import { MdOnlinePrediction } from "react-icons/md";
import { BsShieldShaded } from "react-icons/bs";
import { LuServerCrash } from "react-icons/lu";
import ServerModal from "../../components/ServerModal";

const items = [
  {
    id: 1,
    thumbnail: thumb1,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 2,
    thumbnail: thumb2,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 3,
    thumbnail: thumb3,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 4,
    thumbnail: thumb1,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 5,
    thumbnail: thumb2,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 6,
    thumbnail: thumb3,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 7,
    thumbnail: thumb1,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 8,
    thumbnail: thumb2,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 9,
    thumbnail: thumb3,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 10,
    thumbnail: thumb1,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 11,
    thumbnail: thumb2,
    title: "Server Title",
    serverName: "Server Name",
    serverImage: thumb3,
    views: 224,
    uploadeAt: "5/8/2023",
  },
];

const comments = [
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage: thumb3,
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
];

const ServerItems = ({ filter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveItem, setModalActiveItem] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((server) => (
          <ServerCard
            showModal={showModal}
            key={server.id}
            serverData={server}
          />
        ))}
      </div>
      <ServerModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        comments={comments}
        modalActiveItem={modalActiveItem}
        setModalActiveItem={setModalActiveItem}
      />
    </div>
  );
};

export default ServerItems;
