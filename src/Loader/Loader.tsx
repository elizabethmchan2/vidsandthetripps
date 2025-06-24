import { Platter } from '../assets/infiniteLoader/Platter';
import { Record } from '../assets/infiniteLoader/Record';
import { RecordContrast } from '../assets/infiniteLoader/RecordContrast';
import { Tonearm } from '../assets/infiniteLoader/Tonearm';
import './Loader.scss';

// TODO: fix css modules
const Loader = () => {
  return (
    <div className="loading">
      <div className="wrapper">
        <Record className="record" />
        <Platter className="platter" />
        <RecordContrast className="recordContrast" />
        <Tonearm className="tonearm" />
      </div>
    </div>
  );
};

export default Loader;
