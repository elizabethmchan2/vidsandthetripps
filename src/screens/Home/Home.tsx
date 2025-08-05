import WallPosters from './WallPosters/WallPosters';
import MainContainer from '../../MainContainer/MainContainer';

const Home = () => {
  return (
    <MainContainer childrenContainerClassname="childrenContainerHomePage">
      <WallPosters />
    </MainContainer>
  );
};

export default Home;
