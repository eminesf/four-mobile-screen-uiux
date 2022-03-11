import styles from "./styles.module.css";

import {
  AiOutlineBarcode,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { DashboardItem } from "../DashboardItem/DashboardItem";

export const DashboardContainer = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className={styles.container}>
        <DashboardItem nameButton="Boleto">
          <AiOutlineBarcode />
        </DashboardItem>
        <DashboardItem nameButton="Turmas">
          <AiOutlineBook />
        </DashboardItem>
        <DashboardItem nameButton="Notas">
          <AiOutlineFileProtect />
        </DashboardItem>
        <DashboardItem nameButton="Biblioteca">
          <BsBook />
        </DashboardItem>
        <DashboardItem nameButton="Calendário">
          <AiOutlineCalendar />
        </DashboardItem>
      </div>
    </div>
  );
};
