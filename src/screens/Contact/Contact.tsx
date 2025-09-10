import MainContainer from '../../MainContainer/MainContainer';
import BioHeadshot from '../../assets/vidahasson/bioHeadshot.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <MainContainer>
      <div className="contact">
        <p className="email">
          Email:{' '}
          <a href="mailto:vida.hasson@gmail.com" className="emailLink">
            vida.hasson@gmail.com
          </a>
        </p>
        <p>
          {' '}
          To receive any of Vida's zines, please fill out this{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf87A1ExToej_Bi_I1tVo-dNmBYm2NR-V8KcQjOJmsEzFtc2A/viewform"
            target="_blank"
          >
            {' '}
            form
          </a>
          .
        </p>
        <img src={BioHeadshot} alt="portrait of Vida Hasson" />
      </div>
    </MainContainer>
  );
};

export default Contact;
