import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServerItems from "./ServerItems";

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
  return (
    <div className="p-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={10}
        navigation={true}
        color="white"
        className="px-10"
      >
        {serverFilters.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 text-white rounded px-4 py-1 text-center">
              {slideContent}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ServerItems />
    </div>
  );
};

export default Servers;
