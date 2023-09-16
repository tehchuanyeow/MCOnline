import ServerItems from "./ServerItems";
import { Container } from "../../components/Container";
import Filters from "./Filters";
import { useState } from "react";

const Servers = () => {
  const [selectedFilter, setSelctedFilter] = useState("all");

  return (
    <div className="py-5 bg-dark2">
      <Container>
        <Filters
          selectedFilter={selectedFilter}
          setSelctedFilter={setSelctedFilter}
        />
        <ServerItems filter={selectedFilter} />
      </Container>
    </div>
  );
};

export default Servers;
