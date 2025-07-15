import About from './components/About/About';
import { WALL_POSTER_ITEMS, type AlbumData } from './wallPosterItems';
import { Stereo } from '../assets/home/Stereo';
import { Bookshelf } from '../assets/home/Bookshelf';
import FacePoster from './components/FacePoster/FacePoster';
import './WallPosters.scss';

export const WallPoster = ({
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

const WallPosters = () => {
  return (
    <div className="wallPosters">
      {WALL_POSTER_ITEMS.map((work) => {
        if (work.type === 'album') {
          return (
            <WallPoster
              key={work.key}
              {...work.data}
              gridAreaName={`work-item-${work.key}`}
            />
          );
        }

        if (work.type === 'facePoster') {
          return <FacePoster />;
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

export default WallPosters;
