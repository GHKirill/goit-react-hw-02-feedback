export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback[index]()}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}
