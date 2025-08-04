import MainContainer from '../../MainContainer/MainContainer';
import './Writings.scss';

const AlbumReviews = () => {
  return (
    <section className="writingsSection">
      <h2> Album Reviews </h2>
      <ul className="sectionList">
        <li>
          <a
            href="https://ourculturemag.com/2025/04/05/album-review-l-a-witch-doggod/"
            target="_blank"
          >
            L.A. Witch, DOGGOD
          </a>
        </li>
        <li>
          <a
            href="https://ourculturemag.com/2025/06/16/album-review-pixel-grip-percepticide-the-death-of-reality/"
            target="_blank"
          >
            Pixel Grip, ‘Percepticide: The Death of Reality’
          </a>
        </li>
        <li>
          <a
            href="https://ourculturemag.com/2025/07/24/album-review-indigo-de-souza-precipice/"
            target="_blank"
          >
            Indigo De Souza, ‘Precipice’
          </a>
        </li>
        <li>
          <a
            href="https://newnoisemagazine.com/reviews/album-review-sea-lemon-diving-for-a-prize/"
            target="_blank"
          >
            Sea Lemon, ‘Diving For A Prize’
          </a>
        </li>
        <li>
          <a
            href="https://newnoisemagazine.com/reviews/skunk-anansie-the-painful-truth/"
            target="_blank"
          >
            Skunk Anansie, ‘The Painful Truth’
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/reviews/ep-review-blackwater-holylight-if-you-only-knew//"
            target="_blank"
          >
            Blackwater Holylight, ‘If You Only Knew’
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/reviews/spill-tab-angie/"
            target="_blank"
          >
            Spill Tab, ‘Angie’
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/reviews/bruit-%E2%89%A4-the-age-of-ephemerality/"
            target="_blank"
          >
            BRUIT ≤, ‘The Age of Epheremality’
          </a>
        </li>

        <li>
          <a
            href="https://ourculturemag.com/2025/05/30/album-review-garbage-let-all-that-we-imagine-be-the-light/"
            target="_blank"
          >
            Garbage, ‘Let All That We Imagine Be The Light’
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/reviews/sunflower-bean-mortal-primetime/"
            target="_blank"
          >
            Sunflower Bean, ‘Mortal Primetime’
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/reviews/teaser-sweet-night-stalker/"
            target="_blank"
          >
            Teaser Sweet, ‘Night Stalker’
          </a>
        </li>
      </ul>
    </section>
  );
};

const Listicles = () => {
  return (
    <section className="writingsSection">
      <h2> Listicles </h2>
      <ul className="sectionList">
        <li>
          <a
            href="https://ourculturemag.com/2025/05/21/vinyl-reissues-10-essential-regina-spektor-songs/"
            target="_blank"
          >
            10 Essential Regina Spektor Songs
          </a>
        </li>
        <li>
          <a
            href="https://ourculturemag.com/2025/07/29/9-critical-madonna-songs/"
            target="_blank"
          >
            9 Critical Madonna Songs
          </a>
        </li>
      </ul>
    </section>
  );
};

const InterviewsAndProfiles = () => {
  return (
    <section className="writingsSection">
      <h2> Interviews/Profiles </h2>
      <ul className="sectionList">
        <li>
          <a
            href="https://ourculturemag.com/2025/04/26/author-spotlight-sophie-gilbert/"
            target="_blank"
          >
            Sophie Gilbert
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/interviews/the-haunt-new-addiction/"
            target="_blank"
          >
            The Haunt
          </a>
        </li>

        <li>
          <a
            href="https://www.thelineofbestfit.com/features/interviews/daffo-is-on-the-rise-interview"
            target="_blank"
          >
            Daffo
          </a>
        </li>

        <li>
          <a
            href="https://newnoisemagazine.com/interviews/pinknoise-humankind-ep/"
            target="_blank"
          >
            PINKNOISE
          </a>
        </li>

        <li>
          <a
            href="https://razorcake.org/razorcake-137-featuring-night-court-melissa-cody-good-grief-vial-and-mick-collins-part-two/"
            target="_blank"
          >
            VIAL
          </a>
        </li>

        <li>
          <a
            href="https://razorcake.org/razorcake-147-featuring-blind-adam-and-the-federal-league-the-alley-cats-sicko-wild-powwers-and-amir-h-fallah/"
            target="_blank"
          >
            Wild Powwers
          </a>
        </li>
      </ul>
    </section>
  );
};

const BookReviews = () => {
  return (
    <section className="writingsSection">
      <h2> Book Reviews </h2>
      <ul className="sectionList">
        <li>
          <a
            href="https://ourculturemag.com/2025/04/29/book-review-sophie-gilbert-girl-on-girl-how-pop-culture-turned-a-generation-of-women-against-themselves/"
            target="_blank"
          >
            Sohpie Gilbert, “How Pop Culture Turned a Generation of Women
            Against Themselves”
          </a>
        </li>
      </ul>
    </section>
  );
};

const LiveShowReviews = () => {
  return (
    <section className="writingsSection">
      <h2> Live Show Reviews </h2>
      <ul className="sectionList">
        <li>
          <a
            href="https://www.undertheradarmag.com/reviews/frightwig_4_star_theatre_san_francisco_usa_june_7_2025"
            target="_blank"
          >
            Frightwig, Sapphic Musk, Quaaludes @ 4 Star Theatre, San Francisco
          </a>
        </li>
      </ul>
    </section>
  );
};

const Writings = () => {
  return (
    <MainContainer>
      <div className="writings">
        <AlbumReviews />
        <Listicles />
        <InterviewsAndProfiles />
        <BookReviews />
        <LiveShowReviews />
      </div>
    </MainContainer>
  );
};

export default Writings;
