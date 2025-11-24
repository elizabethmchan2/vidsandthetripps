import ourCultureImage from '../../../assets/works/OurCultureLAWitch.webp';
import reginaSpektor from '../../../assets/works/reginaSpektor.webp';
import allisonWolfe from '../../../assets/works/allisonWolfe.jpg';
import hunxAndHisPunxImage from '../../../assets/works/hunxandhispunx.webp';

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
    key: 'hunx-and-his-punks',
    type: 'album',
    data: {
      href: 'https://newnoisemagazine.com/reviews/hunx-and-his-punx-walk-out-on-this-world/',
      src: hunxAndHisPunxImage,
      altText: 'Hunx and His Punx - Walk Out On This World album cover',
    },
  },
];
