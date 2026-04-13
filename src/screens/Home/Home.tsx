import { useEffect, useState } from 'react';
import WallPosters from './WallPosters/WallPosters';
import MainContainer from '../../MainContainer/MainContainer';
import pissZine from '../../assets/zines/piss-zine.jpg';
import './ZineAnimation.scss';
import { NewZinePiss } from '../../assets/home/NewZinePiss.tsx';

const NEW_ZINE_LOCAL_STORAGE = 'new-zine-animation';

const ZineAnimation = ({ onClick }: { onClick: () => void }) => {
  useEffect(() => {
    const hasSeenZineAnimation = localStorage.getItem(NEW_ZINE_LOCAL_STORAGE);
    if (hasSeenZineAnimation && Number(hasSeenZineAnimation) <= 2) {
      const newCount = Number(hasSeenZineAnimation || 1) + 1;
      localStorage.setItem(NEW_ZINE_LOCAL_STORAGE, `${newCount}`);
    } else if (!hasSeenZineAnimation) {
      localStorage.setItem(NEW_ZINE_LOCAL_STORAGE, `${1}`);
    }
  }, []);

  const hasSeenZineAnimation = localStorage.getItem(NEW_ZINE_LOCAL_STORAGE);
  if (Number(hasSeenZineAnimation) > 2) {
    return null;
  }

  return (
    <dialog className="overlay">
      <div className="background" />
      <button
        className="overlayImage overlayImage-desktop"
        onClick={onClick}
        type="button"
      >
        <a href="/zines">
          <img
            className="zineCover"
            src={pissZine}
            alt='Cover of "Do You Know The Raincoats? (Spring 2026): PISS" by Vida Hasson'
          />
        </a>
        <a href="/zines">
          <NewZinePiss className="overlayNewZine" />
        </a>
      </button>
      <button
        className="overlayImage overlayImage-mobile"
        onClick={onClick}
        type="button"
      >
        <a href="/zines">
          <img
            className="zineCover"
            src={pissZine}
            alt='Cover of "Do You Know The Raincoats? (Spring 2026): PISS" by Vida Hasson'
          />
        </a>
        <a href="/zines">
          {' '}
          <NewZinePiss className="overlayNewZine" />{' '}
        </a>
      </button>
    </dialog>
  );
};

const Home = () => {
  const [isZineAnimationShown, setIsZineAnimationShown] = useState(true);
  return (
    <MainContainer childrenContainerClassname="childrenContainerHomePage">
      <WallPosters />
      {isZineAnimationShown && (
        <ZineAnimation onClick={() => setIsZineAnimationShown(false)} />
      )}
    </MainContainer>
  );
};

export default Home;
