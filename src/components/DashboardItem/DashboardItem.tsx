import {} from "react-icons/ai";
import styles from "./styles.module.css";

type DashboardItemProps = {
  nameButton: string;
  children?: JSX.Element | JSX.Element[];
};

export const DashboardItem = ({ nameButton, children }: DashboardItemProps) => {
  return (
    <div className={styles.container}>
      <span className="text-4xl">{children}</span>
      <h1>{nameButton}</h1>
    </div>
  );
};
