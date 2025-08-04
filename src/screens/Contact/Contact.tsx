import MainContainer from '../../MainContainer/MainContainer';
import BioHeadshot from '../../assets/vidahasson/bioHeadshot.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <MainContainer>
      <div className="contact">
        <p className="email">
          Email:{' '}
          <a href="mailto:vida.hasson@gmail.com">vida.hasson@gmail.com</a>
        </p>
        <p>
          If you would like to receive Vida's latest zines, please send her an
          email.
        </p>
        <img src={BioHeadshot} alt="portrait of Vida Hasson" />
      </div>
    </MainContainer>
  );
};

export default Contact;
