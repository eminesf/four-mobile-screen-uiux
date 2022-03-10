import styles from "./styles.module.css";

type InputProps = {
  text: string;
};

export function Input({ text }: InputProps) {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
}

export default Input;
