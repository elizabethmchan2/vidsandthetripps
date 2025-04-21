import { RecordStand } from '../../assets/RecordStand';
import Loader from '../../Loader/Loader';
import Works from '../../Works/Works';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Vida Hasson</h1>
      <div className="recordStand">
        <RecordStand className="recordHolderStand" />
        <Loader />
      </div>
      <Works />
    </div>
  );
};

export default Home;
