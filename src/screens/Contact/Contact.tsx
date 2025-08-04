import MainContainer from '../../MainContainer/MainContainer';
import BioHeadshot from '../../assets/vidahasson/bioHeadshot.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <MainContainer>
      <div className="contact">
        <p>
          Email:{' '}
          <a href="mailto:vida.hasson@gmail.com">vida.hasson@gmail.com</a>
        </p>
        <img src={BioHeadshot} alt="portrait of Vida Hasson" />
      </div>
    </MainContainer>
  );
};

export default Contact;
