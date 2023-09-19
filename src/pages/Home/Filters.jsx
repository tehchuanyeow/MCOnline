import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "antd";

const serverFilters = [
  "Cross-Play",
  "Java",
  "Bedrock",
];

const Filters = ({ selectedFilter, handleSelectedFilter, resetFilter }) => {
  return (
    <div className="px-5">
      <Button onClick={resetFilter} className="mb-5 text-white">
        Reset All
      </Button>
      <div className="flex items-center">
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          color="white"
          breakpoints={{
            340: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 5,
            },
          }}
          className="flex-1"
        >
          {serverFilters.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() =>
                  handleSelectedFilter(slideContent.toLocaleLowerCase())
                }
                className={`${
                  selectedFilter?.includes(slideContent.toLocaleLowerCase())
                    ? "text-dark1 bg-white"
                    : "bg-dark1 text-white"
                } transition-all duration-500 cursor-pointer rounded px-4 py-1 text-center`}
              >
                {slideContent}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Filters;
