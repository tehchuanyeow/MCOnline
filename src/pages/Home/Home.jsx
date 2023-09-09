import { Container } from "../../components/Container";
import Banner from "./Banner";
import Servers from "./Servers";

export const Home = () => {
  return (
    <div className="">
      <Container>
        <Banner />
        <Servers />
      </Container>
    </div>
  );
};
