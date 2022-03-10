import styles from "./styles.module.css";

type sessionPros = {
  sessionText: string;
};

const Session = ({ sessionText }: sessionPros) => {
  return (
    <div className={styles.container}>
      <h1>{sessionText}</h1>
      <span className={styles.underline}></span>
    </div>
  );
};

export default Session;
