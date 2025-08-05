import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Loader from '../../Loader/Loader';
import './InfiniteRecord.scss';

const InfiniteRecord = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const changeRoute = window.setInterval(() => {
      navigate('/home');
    }, 2500);

    return () => {
      window.clearInterval(changeRoute);
    };
  });
  return (
    <div className="main">
      <Loader />
    </div>
  );
};

export default InfiniteRecord;
