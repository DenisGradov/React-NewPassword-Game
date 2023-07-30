import styles from "./error.module.css";

function Error({ error }) {
  return (
    <div id="error" className={styles.box}>
      <div className={styles.errorMessage}>
        <h2 className={styles.text}>Правило №{parseInt(error.i) + 1}</h2>
        <h2 className={styles.text}>{error.title}</h2>
      </div>
    </div>
  );
}

export default Error;
