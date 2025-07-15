import WallPosters from '../../WallPosters/WallPosters';
import './Home.scss';
import { LeftWallAndFloor } from '../../assets/home/LeftWallAndFloor';

const Home = () => {
  return (
    <div className="home">
      <WallPosters />
      <LeftWallAndFloor className="leftWallAndFloor" />
    </div>
  );
};

export default Home;
