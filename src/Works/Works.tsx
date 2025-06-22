import { RecordStand } from '../assets/RecordStand';
import Loader from '../Loader/Loader';
import { WORK_ITEMS, type WorkType } from './workItems';

export const Work = ({ href, src, altText }: WorkType) => {
  return (
    <a className="albumReview" href={href} target="_blank">
      <div className="albumReviewBackdrop" />
      <img src={src} alt={altText} />
    </a>
  );
};

const Works = () => {
  return (
    <div className="works">
      {WORK_ITEMS.map((work) => {
        return <Work {...work} />;
      })}
      <div className="recordStand">
        <RecordStand className="recordHolderStand" />
        <Loader />
      </div>
    </div>
  );
};

export default Works;
