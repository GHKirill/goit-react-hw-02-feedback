import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonsContainer}>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback[index]()}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func),
};
