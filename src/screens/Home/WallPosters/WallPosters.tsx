import { WALL_POSTER_ITEMS, type AlbumData } from './wallPosterItems';
import { Stereo } from '../../../assets/home/Stereo.tsx';
import { Bookshelf } from '../../../assets/home/Bookshelf.tsx';
import { CDPlayer } from '../../../assets/home/CDPlayer.tsx';
import { RecordArchive } from '../../../assets/home/RecordArchive.tsx';
import { ZineLibrary } from '../../../assets/home/ZineLibrary.tsx';
import girlOnGirl from '../../../assets/works/girlongirl.jpg';
import { useWindowSize } from '@uidotdev/usehooks';

import './WallPosters.scss';

const WallPoster = ({
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
      <img src={src} alt={altText} />
    </a>
  );
};

const WallPostersDesktop = () => {
  return (
    <div className="wallPostersDesktop">
      <div className="wallPosterReviews">
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
        })}
      </div>
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
            <img src={girlOnGirl} alt="Girl on Girl by Sophie Gilbert" />
          </a>
          <a href="/zines" className="zineLibraryLink">
            <ZineLibrary className="zineLibrarySVG" />
          </a>
        </div>
        <Bookshelf className="bookshelfSVG" />
      </div>
    </div>
  );
};

const WallPostersMobile = () => {
  return (
    <div className="wallPostersMobile">
      <div className="wallPosterReviews">
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
        })}
      </div>
      <div className="stereoMobile">
        <Stereo />
      </div>
    </div>
  );
};

const WallPosters = () => {
  const size = useWindowSize();

  if (size?.width && size.width >= 768) {
    return <WallPostersDesktop />;
  }

  return <WallPostersMobile />;
};

export default WallPosters;
