import DeviceList from "../../components/DeviceList";
import { MainContainerDiv } from "../../ui/MainContainer/style";
import Header from "../../components/Header";

const Home = () => {
  setInterval(() => {}, 1000);
  return (
    <MainContainerDiv>
      <Header />
      <DeviceList />
    </MainContainerDiv>
  );
};

export default Home;
