import './Works.scss';
// import * as OurCultureLAWitch from '../../public/OurCultureLAWitch.webp';
// import * as NewNoiseBlackWaterHolylight from '../../public/NewNoiseBlackwaterHolylight.webp';

const OUR_CULTURE_LA_WITCH =
  'https://ourculturemag.com/2025/04/05/album-review-l-a-witch-doggod/';
const NEW_NOISE_BLACKWATER_HOLYLIGHT =
  'https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew/';

const OurCultureLAWitch = () => {
  return (
    <a className="albumReview" href={OUR_CULTURE_LA_WITCH} target="_blank">
      <img
        src={'public/OurCultureLAWitch.webp'}
        alt="LA Witch Doggod album cover"
      />
      {/* our culture */}
    </a>
  );
};
const NewNoiseBlackwaterHolylight = () => {
  return (
    <a
      className="albumReview"
      href={NEW_NOISE_BLACKWATER_HOLYLIGHT}
      target="_blank"
    >
      <img
        src={'public/NewNoiseBlackwaterHolylight.webp'}
        alt="LA Witch Doggod album cover"
      />
      {/* new noise */}
    </a>
  );
};

const Works = () => {
  return (
    <div className="works">
      <div className="albumReviews">
        <OurCultureLAWitch />
        <NewNoiseBlackwaterHolylight />
        <div className="bar" />
      </div>
    </div>
  );
};

export default Works;
