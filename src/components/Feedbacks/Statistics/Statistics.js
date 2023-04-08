import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h3>Statistics</h3>
      {!total ? (
        <NotificationMessage message={'There is no feedback'} />
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total:{total} </p>
          <p>
            Positive feedback:
            {positivePercentage}%
          </p>
        </>
      )}
    </>
  );
}
