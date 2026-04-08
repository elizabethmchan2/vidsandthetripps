import ourCultureImage from '../../../assets/works/OurCultureLAWitch.webp';
import reginaSpektor from '../../../assets/works/reginaSpektor.webp';
import allisonWolfe from '../../../assets/works/allisonWolfe.jpg';
import surfbort from '../../../assets/works/surfbort.jpg';

export type AlbumData = {
  href: string;
  src: string;
  altText: string;
};
export type WallPosterType = {
  key: string;
  type: 'album';
  data: AlbumData;
};

// NOTE: the order of the items affects how they appear and are styled
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
    key: 'allison-wolfe',
    type: 'album',
    data: {
      href: 'https://www.thelineofbestfit.com/features/interviews/bratmobile-allison-wolfe-real-janelle',
      src: allisonWolfe,
      altText: 'Allison wolfe talks the real janelle reissue',
    },
  },
  {
    key: 'surfbort',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/interviews/surfbort-reality-star/',
      src: surfbort,
      altText: 'Surfbort - Reality Star album cover',
    },
  },
];
