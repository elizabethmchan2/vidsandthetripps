import pussyRiotCyka from '../../../assets/works/pussyRiotCyka.jpg';
import heavensToBetsy from '../../../assets/works/heavensToBetsy.jpeg';
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
    key: 'heavens-to-betsy',
    type: 'album',
    data: {
      href: 'https://www.thelineofbestfit.com/features/interviews/heavens-to-betsy-on-their-reunion-grown-up-style',
      src: heavensToBetsy,
      altText: 'Photo of heavens to betsy',
    },
  },
  {
    key: 'pussy-riot',
    type: 'album',
    data: {
      href: 'https://www.thelineofbestfit.com/features/interviews/how-nadya-tolokonnikova-pussy-riot-turned-body-into-missile/',
      src: pussyRiotCyka,
      altText: 'Pussy Riot - CYKA',
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
