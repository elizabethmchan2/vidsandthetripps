import ourCultureImage from '../assets/OurCultureLAWitch.webp';
import blackWaterHolyLightImage from '../assets/NewNoiseBlackwaterHolylight.webp';
import reginaSpektor from '../assets/reginaSpektor.webp';
import garbage from '../assets/garbage.webp';
import skunkAnansie from '../assets/skunkAnansie.webp';
import bruit from '../assets/bruit.webp';
import spillTab from '../assets/spillTab.webp';
import teaserSweet from '../assets/teaserSweet.webp';
import sunflowerBean from '../assets/sunflowerBean.webp';

import './Works.scss';

export type WorkItemType = 'about' | 'album';
export type AlbumData = {
  href: string;
  src: string;
  altText: string;
};
export type WorkType =
  | {
      key: string;
      type: 'album';
      data: AlbumData;
    }
  | {
      key: string;
      type: 'about';
      data: {
        text: string;
      };
    };

export const WORK_ITEMS: WorkType[] = [
  {
    key: 'aboutVida',
    type: 'about',
    data: {
      text: "hello i'm vida hasson",
    },
  },
  {
    key: 'regina-spektor',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew/',
      src: reginaSpektor,
      altText: 'Photo of Regina Spektor',
    },
  },
  {
    key: 'blackwater-holylight',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew/',
      src: blackWaterHolyLightImage,
      altText: 'BlackWater Holylight - If Only You Knew album cover',
    },
  },
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
    key: 'garbage',
    type: 'album',
    data: {
      href: 'https://ourculturemag.com/2025/05/30/album-review-garbage-let-all-that-we-imagine-be-the-light/',
      src: garbage,
      altText: 'Garbage - Let All That We Imagine Be the Light album cover',
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
    key: 'bruit',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/bruit-%E2%89%A4-the-age-of-ephemerality/',
      src: bruit,
      altText: 'Bruit - The Age of Ephemerality album cover',
    },
  },
  {
    key: 'spill-tab',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/spill-tab-angie/',
      src: spillTab,
      altText: 'Spill Tab - Angie album cover',
    },
  },
  {
    key: 'teaser-sweet',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/teaser-sweet-night-stalker/',
      src: teaserSweet,
      altText: 'Teaser Sweet - Night Stalker album cover',
    },
  },
  {
    key: 'sunflower-bean',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/sunflower-bean-mortal-primetime/',
      src: sunflowerBean,
      altText: 'Sunflower Bean - Mortal Primetime album cover',
    },
  },
];
