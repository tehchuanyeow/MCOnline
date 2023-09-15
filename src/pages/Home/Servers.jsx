import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServerItems from "./ServerItems";
import { Container } from "../../components/Container";
import { useState } from "react";

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
  const [selectedFilter, setSelctedFilter] = useState("all");

  return (
    <div className="py-5 bg-dark1">
      <Container>
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
            className="px-5 flex-1"
          >
            {serverFilters.map((slideContent, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() =>
                    setSelctedFilter(slideContent.toLocaleLowerCase())
                  }
                  className={`${
                    selectedFilter === slideContent.toLocaleLowerCase()
                      ? "text-dark2 bg-white"
                      : "bg-dark2 text-white"
                  } cursor-pointer rounded px-4 py-1 text-center`}
                >
                  {slideContent}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ServerItems />
      </Container>
    </div>
  );
};

export default Servers;
