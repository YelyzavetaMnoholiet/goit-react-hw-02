import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul className={styles.list}>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
        <li>TOTAL: {total}</li>
        <li>POSITIVE: {positive}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
