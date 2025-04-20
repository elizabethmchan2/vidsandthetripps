import { RecordStand } from '../../assets/RecordStand';
import Loader from '../../Loader/Loader';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Vida Hasson</h1>
      <div className="recordStand">
        <RecordStand className="recordHolderStand" />
        <Loader />
      </div>
    </div>
  );
};

export default Home;
