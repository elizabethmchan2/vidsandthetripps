import About from './components/About/About';
import { WORK_ITEMS, type AlbumData } from './workItems';
import { Stereo } from '../assets/home/Stereo';
import { Bookshelf } from '../assets/home/Bookshelf';

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
          return <About key={work.key} />;
        }
      })}
      <div className="recordStand">
        <Stereo />
      </div>
      <div className="bookshelf">
        <Bookshelf />
      </div>
    </div>
  );
};

export default Works;
