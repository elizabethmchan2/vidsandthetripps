import bioPhoto from '../../assets/vidahasson/bioPhoto.jpg';
import MainContainer from '../../MainContainer/MainContainer';
import './Bio.scss';

const Bio = () => {
  return (
    <MainContainer>
      <div className="bio">
        <div className="bioLeft">
          <p>
            Vida Hasson is a writer and zine artist from San Francisco. She
            graduated from Claremont McKenna College with an honors degree in
            Literature and a minor in Gender and Sexuality Studies, completing
            her{' '}
            <a
              href="https://scholarship.claremont.edu/cgi/viewcontent.cgi?params=/context/cmc_theses/article/4273/&path_info=Performing_Grrrlhood__A_Lyrical_Analysis_of_Riot_Grrrl_Music.pdf"
              target="_blank"
              className="thesis"
            >
              undergraduate thesis
            </a>{' '}
            on Riot Grrrl song lyrics. She is currently a student in the
            Master's of Arts in English program at New York University.
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
