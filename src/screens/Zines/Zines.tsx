import MainContainer from '../../MainContainer/MainContainer';
import './Zines.scss';
const Zines = () => {
  return (
    <MainContainer>
      <div className="zines">
        <h2> zines </h2>
        <section className="zinesSection">
          <div className="imagePlaceholder" />
          <h3>"Physical Media"</h3>
          <p>
            Available at: Elliot Bay Books, Charlie's Queer Books, Green Apple
            (Clement St.), Green Apple (9th Ave)
          </p>
        </section>

        <section className="zinesSection">
          <div className="imagePlaceholder" />
          <h3>"Vids and the Tripps"</h3>
          <h4>#1 - 6</h4>
          <p>
            Personal zine including album reviews, music commentary, and
            stories.
          </p>
          <p>Available by special request.</p>
        </section>

        <section className="zinesSection">
          <div className="imagePlaceholder" />
          <h3>"Do You Know The Raincoats?"</h3>
          <p>
            Forthcoming zine series featuring interviews with feminist punk
            bands.
          </p>
        </section>
      </div>
    </MainContainer>
  );
};

export default Zines;
