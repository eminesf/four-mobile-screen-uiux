import styles from "./styles.module.css";

type ButtonProps = {
  buttonText: string;
};

export function Button({ buttonText }: ButtonProps) {
  return (
    <a href="dashboard">
      <div className={styles.buttonContainer}>
        <h1>{buttonText}</h1>
      </div>
    </a>
  );
}

export default Button;
