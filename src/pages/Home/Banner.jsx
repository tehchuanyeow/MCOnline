import { BsLifePreserver } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="text-white flex">
      <div className="bg-dark1 h-[500px] hide-bar overflow-y-scroll p-20">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
          <div className="text-center">
            <BsLifePreserver className="text-9xl" />
            <h6 className="font-bold text-3xl mt-5">PlatCY</h6>
            <h6>IP: playcy.net</h6>
          </div>
        </div>
      </div>
      <div className="bg-dark2 p-10 flex-1 text-center">
        <h6 className="mb-10">Draf Vector Sketched Exploration</h6>
        <div className="grid grid-cols-3 justify-items-center gap-y-3">
          <BsLifePreserver className="text-7xl" />
          <BsLifePreserver className="text-7xl" />
          <BsLifePreserver className="text-7xl" />
          <BsLifePreserver className="text-7xl" />
          <BsLifePreserver className="text-7xl" />
          <BsLifePreserver className="text-7xl" />
        </div>
        <h2 className="mt-10 text-4xl font-bold underline">Sponsored Server</h2>
        <h6 className="font-semibold my-5">Bidding is now Open!</h6>
        <h6>Apply for a slot</h6>
      </div>
    </div>
  );
};

export default Banner;
