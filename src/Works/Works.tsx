import About from './components/About/About';
import { RecordStand } from '../assets/RecordStand';
import Loader from '../Loader/Loader';
import { WORK_ITEMS, type AlbumData } from './workItems';

export const Work = ({
  href,
  src,
  altText,
  gridAreaName,
}: AlbumData & { gridAreaName: string }) => {
  return (
    <a
      className="albumReview"
      href={href}
      target="_blank"
      style={{
        gridArea: gridAreaName,
      }}
    >
      <div className="albumReviewBackdrop" />
      <img src={src} alt={altText} />
    </a>
  );
};

const Works = () => {
  return (
    <div className="works">
      {WORK_ITEMS.map((work) => {
        if (work.type === 'album') {
          return (
            <Work
              key={work.key}
              {...work.data}
              gridAreaName={`work-item-${work.key}`}
            />
          );
        }

        if (work.type === 'about') {
          return <About />;
        }
      })}
      <div className="recordStand">
        <RecordStand className="recordHolderStand" />
        <Loader />
      </div>
    </div>
  );
};

export default Works;
