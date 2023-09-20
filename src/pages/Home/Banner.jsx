import thumb1 from "../../assets/thumb-1.jpg";
import thumb2 from "../../assets/thumb-2.jpg";
import thumb3 from "../../assets/thumb-3.jpg";
import { Container } from "../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { useState } from "react";
import ServerModal from "../../components/ServerModal";

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

const topServers = [
  { thumbnail: thumb1 },
  { thumbnail: thumb2 },
  { thumbnail: thumb3 },
  { thumbnail: thumb1 },
  { thumbnail: thumb2 }
];

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveItem, setModalActiveItem] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectedThumbs, setSelectedThumbs] = useState(0);

  return (
    <div className="bg-dark1 p-5">
      <Container>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {topServers.map((server, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={showModal}
                src={server.thumbnail}
                alt="slide1"
                className="w-full md:h-96 h-40 object-cover cursor-pointer rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={topServers.length}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-10"
        >
          {topServers.map((server, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={() => setSelectedThumbs(index)}
                src={server.thumbnail}
                alt="slide1"
                className={`w-full border-2 md:h-32 h-12 transition-all duration-500 object-cover cursor-pointer rounded-2xl`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <ServerModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          comments={comments}
          modalActiveItem={modalActiveItem}
          setModalActiveItem={setModalActiveItem}
        />
      </Container>
    </div>
  );
};

export default Banner;
