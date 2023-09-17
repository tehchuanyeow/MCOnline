import ServerItems from "./ServerItems";
import { Container } from "../../components/Container";
import Filters from "./Filters";
import { useState } from "react";

const Servers = () => {
  const [selectedFilter, setSelectedFilter] = useState(["all"]);

  const handleSelectedFilter = (filter) => {
    if (selectedFilter.length === 1 && selectedFilter[0] === filter) {
      return;
    } else if (selectedFilter.includes(filter)) {
      // Filter is already selected, so remove it
      setSelectedFilter(selectedFilter.filter((item) => item !== filter));
    } else {
      // Filter is not selected, so add it
      setSelectedFilter([...selectedFilter, filter]);
    }
  };

  const resetHandler = () => setSelectedFilter(["all"]);

  return (
    <div className="py-5 bg-dark2">
      <Container>
        <Filters
          selectedFilter={selectedFilter}
          handleSelectedFilter={handleSelectedFilter}
          resetFilter={resetHandler}
        />
        <ServerItems filter={selectedFilter} />
      </Container>
    </div>
  );
};

export default Servers;
