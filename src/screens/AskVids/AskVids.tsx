import { useState, useRef } from 'react';
import './AskVids.scss';
import { ANSWERS } from './content';
import { Link } from 'react-router';

const getRandomInt = (min: number, max: number) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const AskVids = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitRef = useRef<HTMLButtonElement>();
  const textareaRef = useRef();

  const onSubmit = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="askVids">
      <Link to="/home" className="homeButton">
        Home
      </Link>
      <div className="content">
        <label htmlFor="ask-vids">Ask Vids anything...</label>
        <textarea
          id="ask-vids"
          name="ask-vids"
          className="textarea"
          onKeyUp={(key) => {
            if (key.code === 'Enter' && !isSubmitted) {
              onSubmit();
              submitRef.current?.focus();
            }
          }}
          ref={textareaRef}
        />
        <button
          type="button"
          onClick={() => {
            onSubmit();
          }}
          ref={submitRef}
        >
          {isSubmitted ? 'Ask another question' : 'Submit'}
        </button>
        <p className="answer">
          {isSubmitted && ANSWERS[getRandomInt(0, ANSWERS.length - 1)]}
        </p>
      </div>
    </div>
  );
};

export default AskVids;
