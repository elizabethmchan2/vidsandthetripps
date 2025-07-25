import About from './components/About/About';
import { WALL_POSTER_ITEMS, type AlbumData } from './wallPosterItems';
import { Stereo } from '../assets/home/Stereo';
import { Bookshelf } from '../assets/home/Bookshelf';
import FacePoster from './components/FacePoster/FacePoster';
import './WallPosters.scss';
import { CDPlayer } from '../assets/home/CDPlayer';
import { RecordArchive } from '../assets/home/RecordArchive';
import girlOnGirl from '../assets/works/girlongirl.jpg';
import { ZineLibrary } from '../assets/home/ZineLibrary';

export const WallPoster = ({
  href,
  src,
  altText,
  gridAreaName,
}: AlbumData & { gridAreaName?: string }) => {
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
        <Stereo className="recordStandSVG" />
      </div>
      <div className="cdPlayerAndRecordArchive">
        <div className="cdPlayer">
          <CDPlayer className="cdPlayerSVG" />
        </div>
        <div className="recordArchive">
          <RecordArchive className="recordArchiveSVG" />
        </div>
      </div>
      <div className="bookshelf">
        <div className="topOfBookshelf">
          <a
            className="girlOnGirl"
            href={
              'https://ourculturemag.com/2025/04/29/book-review-sophie-gilbert-girl-on-girl-how-pop-culture-turned-a-generation-of-women-against-themselves/'
            }
            target="_blank"
          >
            <div className="albumReviewBackdrop" />
            <img src={girlOnGirl} alt="Girl on Girl by Sophie Gilbert" />
          </a>
          <ZineLibrary className="zineLibrarySVG" />
        </div>
        <Bookshelf className="bookshelfSVG" />
      </div>
    </div>
  );
};

export default WallPosters;
