import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Loader from '../../Loader/Loader';
import './InfiniteRecord.scss';

const InfiniteRecord = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const changeRoute = window.setInterval(() => {
      if ([...searchParams.keys()].includes('animate')) {
        navigate('/home');
      }
    }, 5000);

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
