import bioPhoto from '../../assets/vidahasson/bioPhoto.jpg';
import MainContainer from '../../MainContainer/MainContainer';
import './Bio.scss';

const Bio = () => {
  return (
    <MainContainer>
      <div className="bio">
        <div className="bioLeft">
          <p>
            Vida Hasson is a writer, music critic, and zine artist based in
            Seattle and San Francisco. Her writing has appeared in Razorcake,
            Our Culture Mag, New Noise Magazine, The Line of Best Fit, and Under
            the Radar. She specializes in feminist punk music.
          </p>
        </div>
        <div className="bioRight">
          <img src={bioPhoto} alt="Vida Hasson posing" className="bioPhoto" />
        </div>
      </div>
    </MainContainer>
  );
};

export default Bio;
