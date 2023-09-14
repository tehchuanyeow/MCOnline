import { Modal } from "antd";
import ServerCard from "./ServerCard";
import { useState } from "react";
import { BiSend, BiSolidCategory, BiSolidUpvote } from "react-icons/bi";
import { MdOnlinePrediction } from "react-icons/md";
import { BsShieldShaded } from "react-icons/bs";
import { LuServerCrash } from "react-icons/lu";

const items = [
  {
    id: 1,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 2,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 3,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 4,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 5,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 6,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 7,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 8,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 9,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 10,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
  {
    id: 11,
    thumbnail:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    title: "Server Title",
    serverName: "Server Name",
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    views: 224,
    uploadeAt: "5/8/2023",
  },
];

const comments = [
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
  {
    serverImage:
      "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg",
    serverName: "Julia HG",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
  },
];

const ServerItems = () => {
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
      <Modal
        onCancel={closeModal}
        width={1000}
        title="Basic Modal"
        open={isModalOpen}
        footer={null}
      >
        <div className="md:flex">
          <div className="bg-dark1 px-2 py-4 md:w-20 flex md:flex-col items-center">
            <BiSolidCategory
              onClick={() => setModalActiveItem(1)}
              className={`${
                modalActiveItem === 1 ? "bg-white text-black" : "text-white"
              } p-2 text-4xl rounded-md`}
            />
            <BiSend
              onClick={() => setModalActiveItem(2)}
              className={`${
                modalActiveItem === 2 ? "bg-white text-black" : "text-white"
              } p-2 text-4xl rounded-md`}
            />
          </div>
          <div className="text-white bg-dark2 p-5 md:flex-1">
            <h6 className="text-lg">Overview</h6>
            <h6 className="text-2xl font-semibold my-5">Hyoundai Ionic 5</h6>

            {modalActiveItem === 1 ? (
              <div>
                <div className="md:flex gap-2 text-dark1">
                  <div className="md:w-1/3 mb-2 md:mb-0 bg-white rounded-md p-2">
                    <MdOnlinePrediction className="text-3xl" />
                    <h6 className="text-4xl font-bold my-2">70</h6>
                    <h6>Online Players</h6>
                  </div>
                  <div className="md:w-1/3 mb-2 md:mb-0 bg-white rounded-md p-2">
                    <LuServerCrash className="text-3xl" />
                    <h6 className="text-4xl font-bold my-2">70</h6>
                    <h6>Server Types</h6>
                  </div>
                  <div className="md:w-1/3 mb-2 md:mb-0 bg-white rounded-md p-2">
                    <BiSolidUpvote className="text-3xl" />
                    <h6 className="text-4xl font-bold my-2">70</h6>
                    <h6>Votes</h6>
                  </div>
                </div>
                <p className="my-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quam dolore omnis vitae minus minima quia porro, aliquid,
                  obcaecati velit dolores laborum sint harum nostrum maiores
                  eaque ex animi excepturi nobis cupiditate eum, expedita
                  necessitatibus? Culpa temporibus voluptas animi nesciunt quos
                  aut saepe neque iusto, molestiae sint obcaecati natus! In
                  temporibus quo deleniti impedit, est ea ullam voluptatem
                  similique sunt maiores provident quisquam possimus expedita
                  sint distinctio dolores suscipit ipsa sapiente aperiam velit.
                  Est aliquam dignissimos esse porro illum pariatur architecto
                  fuga sunt quaerat, omnis, praesentium similique perferendis
                  corrupti quia nostrum? Ad nisi vitae autem accusamus,
                  cupiditate blanditiis voluptatibus aliquid?
                </p>
              </div>
            ) : (
              <div>
                {/* Description and IP */}
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nemo at dolorum, maiores sint provident quos qui
                  exercitationem quia temporibus!
                </p>
                <h6 className="my-2 font-semibold italic">IP: playcn.net</h6>
                {/* Media */}
                <iframe
                  width="100%"
                  className="w-full h-60"
                  src="https://www.youtube.com/embed/AjWfY7SnMBI"
                  title="24 hours + of pure black screen in HD!"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <div className="p-5 bg-white text-dark1 rounded my-5">
                  <div className="md:flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <BsShieldShaded className="text-3xl" />
                      <div>
                        $<span className="text-4xl">289.5</span>
                      </div>
                    </div>
                    <h6 className="text-green-500 font-semibold text-2xl">
                      +8.84%
                    </h6>
                  </div>

                  {/* Charts */}
                  <div>
                    <div className="flex justify-between p-5">
                      <div className="text-center">
                        <h6>- June</h6>
                        <h6>2015</h6>
                      </div>
                      <div className="text-center">
                        <h6>- July</h6>
                        <h6>2015</h6>
                      </div>
                      <div className="text-center">
                        <h6>- August</h6>
                        <h6>2015</h6>
                      </div>
                    </div>

                    <div className="my-5 flex gap-1 overflow-x-scroll">
                      {[
                        ...Array(70)
                          .fill(null)
                          .map((_, index) => (
                            <div
                              key={index}
                              className="w-1 h-60 bg-gray-600 flex items-end"
                            >
                              <div className="w-1 h-40 bg-dark1"></div>
                            </div>
                          )),
                      ]}
                    </div>

                    <div className="my-5 flex justify-between overflow-x-scroll">
                      {[
                        ...Array(70)
                          .fill(null)
                          .map(
                            (_, index) =>
                              index % 5 === 0 &&
                              index >= 5 && <h6 key={index}>{index}</h6>
                          ),
                      ]}
                    </div>
                  </div>
                </div>
                {/* Comments */}
                <div className="bg-white p-5 rounded-md">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {comments.map((comment, index) => (
                      <div
                        key={index}
                        className="text-white bg-dark2 p-3 rounded-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={comment.serverImage}
                            alt="server_img"
                            className="w-10 h-10 rounded-full"
                          />
                          <h6>{comment.serverName}</h6>
                        </div>
                        <p>{comment.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ServerItems;
