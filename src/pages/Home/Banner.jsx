import thumb1 from "../../assets/thumb-1.jpg";
import thumb2 from "../../assets/thumb-2.jpg";
import thumb3 from "../../assets/thumb-3.jpg";
import { Container } from "../../components/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveItem, setModalActiveItem] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-dark1 p-10">
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              onClick={showModal}
              src={thumb1}
              alt="slide1"
              className="w-full md:h-96 h-60 object-cover cursor-pointer rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={showModal}
              src={thumb2}
              alt="slide1"
              className="w-full md:h-96 h-60 object-cover cursor-pointer rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={showModal}
              src={thumb3}
              alt="slide1"
              className="w-full md:h-96 h-60 object-cover cursor-pointer rounded-2xl"
            />
          </SwiperSlide>
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
