import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServerItems from "./ServerItems";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const serverFilters = [
  "All",
  "filter1",
  "filter2",
  "filter3",
  "filter4",
  "filter5",
  "filter6",
  "filter7",
  "filter8",
  "filter9",
  "filter10",
  "filter11",
  "filter12",
  "filter13",
  "filter14",
];

const Servers = () => {
  const swiper = useSwiper();

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BiChevronLeft
          onClick={() => swiper.slidePrev()}
          className="cursor-pointer bg-black text-white text-4xl p-1 rounded-full h-10 w-10 flex items-center justify-between"
        />
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          color="white"
          breakpoints={{
            240: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 2,
            },
          }}
          className="px-10 flex-1"
        >
          {serverFilters.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 text-white rounded px-4 py-1 text-center">
                {slideContent}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <BiChevronRight
          onClick={() => swiper.slideNext()}
          className="cursor-pointer bg-black text-white text-4xl p-1 rounded-full h-10 w-10 flex items-center justify-between"
        />
      </div>
      <ServerItems />
    </div>
  );
};

export default Servers;
