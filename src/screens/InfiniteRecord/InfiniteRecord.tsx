import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import Loader from '../../Loader/Loader';
import './InfiniteRecord.scss';
import Face from '../../assets/home/Face';
import classNames from 'classnames';

const InfiniteRecord = () => {
  const navigate = useNavigate();

  const routeChangeRef = useRef<number>();
  useEffect(() => {
    return () => {
      if (routeChangeRef) {
        window.clearInterval(routeChangeRef.current);
      }
    };
  }, []);

  const [shouldStartSpinning, setShouldStartSpinning] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const onClick = () => {
    setShouldStartSpinning(true);
    setShowButton(false);
    const changeRoute = window.setInterval(() => {
      navigate('/home');
    }, 4000);
    routeChangeRef.current = changeRoute;
  };

  return (
    <div className="main">
      <Face className="face" />
      <Loader shouldStartSpinning={shouldStartSpinning} />
      <button
        type="button"
        onClick={onClick}
        disabled={!showButton}
        tabIndex={showButton ? 0 : -1}
        className={classNames('enterButton', { ['hideButton']: !showButton })}
      >
        enter
      </button>
    </div>
  );
};

export default InfiniteRecord;
