import thumb1 from "../../assets/thumb-1.jpg";
import thumb2 from "../../assets/thumb-2.jpg";
import thumb3 from "../../assets/thumb-3.jpg";
import { Container } from "../../components/Container";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

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
  { thumbnail: thumb2 },
  { thumbnail: thumb3 },
];

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveItem, setModalActiveItem] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState(0);

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
                className="w-full md:h-96 h-60 object-cover cursor-pointer rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            500: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 5,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwipper mt-10"
        >
          {topServers.map((server, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={() => setSelectedThumbs(index)}
                src={server.thumbnail}
                alt="slide1"
                className={`${
                  selectedThumbs === index ? "opacity-100" : "opacity-40"
                }  w-full border-4 h-32 transition-all duration-500 object-cover cursor-pointer rounded-2xl`}
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
