import styles from "./noError.module.css";

function NoError({ noError }) {
  return (
    <div className={styles.box}>
      {noError
        .slice()
        .reverse()
        .map((i, index) => {
          return (
            <div className={styles.noErrorMessage}>
              <h2 className={styles.text}>Правило №{parseInt(i.i) + 1}</h2>
              <h2 className={styles.text}>{i.title}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default NoError;
