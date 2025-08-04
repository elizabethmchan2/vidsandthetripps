import ourCultureImage from '../assets/works/OurCultureLAWitch.webp';
import blackWaterHolyLightImage from '../assets/works/NewNoiseBlackwaterHolylight.webp';
import reginaSpektor from '../assets/works/reginaSpektor.webp';
// import garbage from '../assets/works/garbage.webp';
import skunkAnansie from '../assets/works/skunkAnansie.webp';
// import bruit from '../assets/works/bruit.webp';
// import spillTab from '../assets/works/spillTab.webp';
import indigoDeSouza from '../assets/works/indigoDeSouza.webp';
// import teaserSweet from '../assets/works/teaserSweet.webp';
// import sunflowerBean from '../assets/works/sunflowerBean.webp';

export type AlbumData = {
  href: string;
  src: string;
  altText: string;
};
export type WallPosterType =
  | {
      key: string;
      type: 'album';
      data: AlbumData;
    }
  | {
      key: string;
      type: 'about';
    }
  | {
      key: string;
      type: 'facePoster';
    };

export const WALL_POSTER_ITEMS: WallPosterType[] = [
  {
    key: 'regina-spektor',
    type: 'album',
    data: {
      href: 'https://ourculturemag.com/2025/05/21/vinyl-reissues-10-essential-regina-spektor-songs/',
      src: reginaSpektor,
      altText: 'Photo of Regina Spektor',
    },
  },
  // {
  //   key: 'blackwater-holylight',
  //   type: 'album',
  //   data: {
  //     href: 'https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew/',
  //     src: blackWaterHolyLightImage,
  //     altText: 'BlackWater Holylight - If Only You Knew album cover',
  //   },
  // },
  {
    key: 'la-witch',
    type: 'album',
    data: {
      href: 'https://ourculturemag.com/2025/04/05/album-review-l-a-witch-doggod/',
      src: ourCultureImage,
      altText: 'LA Witch - Doggod album cover',
    },
  },
  {
    key: 'skunk-anansie',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/skunk-anansie-the-painful-truth/',
      src: skunkAnansie,
      altText: 'Skunk Anansie - The Painful Truth album cover',
    },
  },
  {
    key: 'indigo',
    type: 'album',
    data: {
      href: 'https://ourculturemag.com/2025/07/24/album-review-indigo-de-souza-precipice/',
      src: indigoDeSouza,
      altText: 'Indigo De Souza - Precipice',
    },
  },
  // {
  //   key: 'garbage',
  //   type: 'album',
  //   data: {
  //     href: 'https://ourculturemag.com/2025/05/30/album-review-garbage-let-all-that-we-imagine-be-the-light/',
  //     src: garbage,
  //     altText: 'Garbage - Let All That We Imagine Be the Light album cover',
  //   },
  // },
  // {
  //   key: 'bruit',
  //   type: 'album',
  //   data: {
  //     href: 'https://newnoisemagazine.com/reviews/bruit-%E2%89%A4-the-age-of-ephemerality/',
  //     src: bruit,
  //     altText: 'Bruit - The Age of Ephemerality album cover',
  //   },
  // },
  // {
  //   key: 'spill-tab',
  //   type: 'album',
  //   data: {
  //     href: 'https://newnoisemagazine.com/reviews/spill-tab-angie/',
  //     src: spillTab,
  //     altText: 'Spill Tab - Angie album cover',
  //   },
  // },
  // {
  //   key: 'teaser-sweet',
  //   type: 'album',
  //   data: {
  //     href: 'https://newnoisemagazine.com/reviews/teaser-sweet-night-stalker/',
  //     src: teaserSweet,
  //     altText: 'Teaser Sweet - Night Stalker album cover',
  //   },
  // },
  // {
  //   key: 'sunflower-bean',
  //   type: 'album',
  //   data: {
  //     href: 'https://newnoisemagazine.com/reviews/sunflower-bean-mortal-primetime/',
  //     src: sunflowerBean,
  //     altText: 'Sunflower Bean - Mortal Primetime album cover',
  //   },
  // },
];
