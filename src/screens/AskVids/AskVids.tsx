import { useState } from 'react';

const ANSWERS = [
  'Okay but have you heard of riot girl',
  'Definitely Sheela-Na-Gig by PJ Harvey',
  'I would probably say when Sinead O’Connor tore up that photo of the pope on Saturday Night Live',
  'Bikini Kill, Bratmobile, Heavens to Betsy',
  'Mommy Longlegs, Lambrini Girls, Destroy Boys',
  'I don’t know what the weather is today. Have you tried looking outside? By the way, Riot Grrrl is a feminist punk movement in the 1990s started in Olympia, Washington',
  'Rebel Girl by Bikini Kill would probably do the trick',
  'I know you’re not supposed to call women crazy, but Courtney Love is crazy',
  'If you don’t know Alice Bag or Poly Styrene, then I don’t think you deserve to know the answer to that question',
  'If you have an itch to scratch, you should support your local music venues',
];

const getRandomInt = (min: number, max: number) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const AskVids = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div>
      <label htmlFor="ask-vids">Ask anything </label>
      <input type="text" id="ask-vids" name="ask-vids" />
      <button
        type="button"
        onClick={() => {
          setIsSubmitted(true);
        }}
      >
        {' '}
        Submit{' '}
      </button>
      <p>{isSubmitted && ANSWERS[getRandomInt(0, ANSWERS.length - 1)]}</p>
    </div>
  );
};

export default AskVids;
