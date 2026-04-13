import MainContainer from '../../MainContainer/MainContainer';
import raincoatsZine from '../../assets/zines/raincoats-zine.jpg';
import physicalMediaZine from '../../assets/zines/physicalmedia-zine.jpg';
import physicalMediaZineTwo from '../../assets/zines/physicalmedia-zine-two.jpg';
import mosswodMeltdownZine from '../../assets/zines/mosswoodmeltdown-zine.jpg';
import outOfOffice from '../../assets/zines/outOfOffice.jpg';
import pissZine from '../../assets/zines/piss-zine.jpg';
import vidsAndTheTripps1 from '../../assets/zines/vidsandthetripps1-zine.jpg';
import vidsAndTheTripps2 from '../../assets/zines/vidsandthetripps2-zine.jpg';
import vidsAndTheTripps4 from '../../assets/zines/vidsandthetripps4-zine.jpg';
import vidsAndTheTripps5 from '../../assets/zines/vidsandthetripps5-zine.jpg';

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
              src={pissZine}
              alt='Cover of "Do You Know The Raincoats? (Spring 2026): PISS" by Vida Hasson'
            />
            <h2>"Do You Know The Raincoats?"</h2>
            <h3>Spring 2026: PISS</h3>
            <p>
              A zine series featuring interviews with feminist punk bands
              inspired by Bloomsbury's 33 1/3 series on The Raincoats self
              titled debut album released in 1979. The second issue spotlights
              Vancouver punk band PISS, the band who quotes anarchist feminists,
              Andrea Dworkin, and bell hooks in a single album.{' '}
            </p>
          </section>

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
              San Francisco punks Frightwig, the band who inspired the sound and
              ethos of the riot grrrl movement.{' '}
            </p>
            <p className="raincoatsQuote">
              "Thanks to bands like Frightwig, zine makers like Vida, and other
              lifers, the generations of DIY punk will be connected and continue
              to thrive forever." -
              <a href="https://razorcake.org/do-you-know-the-raincoats-fall-2025-5-or-trade-5%C2%BD-x-8-black-and-white-22-pgs/">
                Razorcake
              </a>
            </p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={physicalMediaZineTwo}
              alt='Cover of "Physical Media #2" by Vida Hasson'
            />
            <h2>"Physical Media #2"</h2>
            <p>
              The second installment in the Physical Media series focusing on
              audio-visual media. Available in Seattle and San Francisco
              bookstores.
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
              physical media. Available in Seattle and San Francisco bookstores.
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
              "This humble zine encapsulates so much of what I love about the
              DIY punk scene... Vida’s colorful photos and hand-scribbled,
              stream-of-conscious captions capture the magic of going to a show
              and feeling like you belong, even though you don’t know anyone
              there. In her case, she saw G.L.O.S.S., Scowl, Bratmobile, and
              Madonna shirts and knew she was with her people. And because I was
              wearing a Night Court tee, now we’re friends!" –
              <a href="https://razorcake.org/shirts-i-saw-at-mosswood-meltdown-2025-5%C2%BD-x-81%C2%BD-color-copy-20-pgs/">
                Razorcake
              </a>
            </p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={vidsAndTheTripps5}
              alt='Cover of "Vids and The Tripps #5" by Vida Hasson'
            />
            <h2>"Vids and the Tripps #5"</h2>
            <h3>Issue #5: January 2025 </h3>
            <p>
              A screenplay? All the books I read in 2024? Indoctrinating others
              into the analog life? Shouts from the Seattle music scene?
            </p>
            <p>Available by special request.</p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={vidsAndTheTripps4}
              alt='Cover of "Vids and The Tripps #4" by Vida Hasson'
            />
            <h2>"Vids and the Tripps #4"</h2>
            <h3>Issue #4: September 2024</h3>
            <p>
              This is my personal favorite of the vids and the tripps series. I
              recount a night at Death Guild, the longest running weekly goth
              night in the world, review Shannon and the Clams album 'The Moon
              Is In The Wrong Place' in conjunction with my experience no longer
              streaming music, and give flash fiction a shot.
            </p>
            <p>Available by special request.</p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={outOfOffice}
              alt="Out of office drawing"
            />
            <h2>"Vids and the Tripps #3"</h2>
            <h3>Issue #3 </h3>
            <p>Omg! I can't find anymore of this one.</p>
            <p>Not available by request... unless?</p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={vidsAndTheTripps2}
              alt='Cover of "Vids and The Tripps #2" by Vida Hasson'
            />
            <h2>"Vids and the Tripps #2"</h2>
            <h3>Issue #2: May 2024 </h3>
            <p>
              Features two stories your great-aunt would love, some xerox art,
              and the lineup for DJ Piano Fingers first fake show.
            </p>
            <p>Available by special request.</p>
          </section>

          <section className="zinesSection">
            <img
              className="zineCover"
              src={vidsAndTheTripps1}
              alt='Cover of "Vids and The Tripps #1" by Vida Hasson'
            />
            <h2>"Vids and the Tripps #1"</h2>
            <h3>Issue #1: March 2024 </h3>
            <p>
              Personal zine including album reviews, music commentary, stories,
              the occasional screenplay, and a moment of flash fiction. Issue #1
              features stories from a visit to NYC, a review of
              Sleater-Kinnney's album 'Little Rope,' and a day in the music life
              of DJ Piano Fingers.
            </p>
            <p>Available by special request.</p>
          </section>
        </div>
      </div>
    </MainContainer>
  );
};

export default Zines;
