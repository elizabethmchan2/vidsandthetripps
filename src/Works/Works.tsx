import ourCultureImage from '../assets/OurCultureLAWitch.webp';
import blackWaterHolyLightImage from '../assets/NewNoiseBlackwaterHolylight.webp';

import './Works.scss';
const OUR_CULTURE_LA_WITCH =
  'https://ourculturemag.com/2025/04/05/album-review-l-a-witch-doggod/';
const NEW_NOISE_BLACKWATER_HOLYLIGHT =
  'https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew/';

const OurCultureLAWitch = () => {
  return (
    <a className="albumReview" href={OUR_CULTURE_LA_WITCH} target="_blank">
      <img src={ourCultureImage} alt="LA Witch Doggod album cover" />
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
      <img src={blackWaterHolyLightImage} alt="LA Witch Doggod album cover" />
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
