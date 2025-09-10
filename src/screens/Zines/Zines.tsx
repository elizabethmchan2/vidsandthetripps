import MainContainer from '../../MainContainer/MainContainer';
import raincoatsZine from '../../assets/zines/raincoats-zine.jpg';
import physicalMediaZine from '../../assets/zines/physicalmedia-zine.jpg';
import mosswodMeltdownZine from '../../assets/zines/mosswoodmeltdown-zine.jpg';
import sleaterKinneyZine from '../../assets/zines/sleater-kinney-zine.jpg';

import './Zines.scss';

const Zines = () => {
  return (
    <MainContainer>
      <div className="zines">
        <p>
          {' '}
          To receive any of these zines, please fill out this{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf87A1ExToej_Bi_I1tVo-dNmBYm2NR-V8KcQjOJmsEzFtc2A/viewform"
            target="_blank"
          >
            {' '}
            form
          </a>
          .
        </p>
        <div className="zinesContainer">
          <section className="zinesSection">
            <img
              className="zineCover"
              src={raincoatsZine}
              alt='Cover of "Do You Know The Raincoats? (Fall 2025): Frightwig" by Vida Hasson'
            />
            <h2>"Do You Know The Raincoats?"</h2>
            <h3>Fall 2025: Frightwig</h3>
            <p>
              A zine series featuring interviews with feminist punk bands
              inspired by Bloomsbury's 33 1/3 series on The Raincoats self
              titled debut album released in 1979. The first issue spotlights
              San Francisco punks Frightwig, the band that inspired the sound
              and ethos of the riot grrrl movement.
            </p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={physicalMediaZine}
              alt='Cover of "Physical Media" by Vida Hasson'
            />
            <h2>"Physical Media"</h2>
            <p>
              Guide on how to stop streaming music and enter the world of
              physical media. Available at: Elliot Bay Books, Charlie's Queer
              Books, Green Apple (Clement St.), Green Apple (9th Ave)
            </p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={mosswodMeltdownZine}
              alt='Cover of "Shirts I saw at Mosswood Meltdown" by Vida Hasson'
            />
            <h2>"Shirts I saw at Mosswood Meltdown"</h2>
            <p>
              Polaroid photos of shirts I saw at Oakland's punk rock music
              festival Mosswood Meltdown with humorous commentary.
            </p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={sleaterKinneyZine}
              alt='Cover of "Vids and The Tripps" by Vida Hasson'
            />
            <h2>"Vids and the Tripps"</h2>
            <h3>issues #1 - #6 from May 2023-February 2024</h3>
            <p>
              Personal zine including album reviews, music scene commentary,
              stories, the occasional screenplay, and a moment of flash fiction.
            </p>
            <p>Available by special request.</p>
          </section>
        </div>
      </div>
    </MainContainer>
  );
};

export default Zines;
