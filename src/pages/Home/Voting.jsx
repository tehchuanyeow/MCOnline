import { Container } from "../../components/Container";

const Voting = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-dark2 text-white">
      <Container>
        <div>
          <div className="text-center">
            <h6 className="md:text-3xl font-bold">
              Cast Daily Vote for Minecraft Server:
            </h6>
            <h6 className="md:text-3xl font-bold">
              DeadMC - SURVIVE & THRIVE! - Towns | Combat | Economy | Community
              - 1.20.1
            </h6>
            <p className="my-5 text-xs md:text-sm">
              You are able to vote once a day for Minecraft Server &quot;Dead MC
              - SURVIVE & THRIVE! - Towns | Combat | Economy | Community -
              1.20&quot;1&quot; on Planet Minecraft. This United States server
              has been on PMC since Oct 3rd, 2019 and this month they have 129
              votes. Voting for this Minecraft server helps them rise the server
              charts on Planet Minecraft. Thanks for helping them grow.
            </p>
          </div>
          <div className="mt-10 md:w-1/2 mx-auto bg-dark2 p-5 rounded-md text-white ">
            <h6 className="text-center">Daily Server Vote</h6>
            <input
              type="text"
              className="mt-5 p-2 rounded border w-full"
              placeholder="Minecradt Name"
            />
            <h6 className="text-smn text-center">Username is CaSe-SeNsiTive</h6>
            <button className="rounded block mt-5 uppercase bg-primary py-2 px-6 w-fit mx-auto">
              Submit Vote!
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Voting;
