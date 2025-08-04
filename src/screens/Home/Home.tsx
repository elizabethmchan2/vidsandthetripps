import WallPosters from '../../WallPosters/WallPosters';
import './Home.scss';
import { LeftWallAndFloor } from '../../assets/home/LeftWallAndFloor';
import MainContainer from '../../MainContainer/MainContainer';

const Home = () => {
  return (
    <MainContainer>
      <WallPosters />
      <LeftWallAndFloor className="leftWallAndFloor" />
    </MainContainer>
  );
};

export default Home;
