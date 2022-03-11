import styles from "./styles.module.css";

let daysWeek = [
  { id: 0, name: "Domingo" },
  { id: 1, name: "Segunda-Feira" },
  { id: 2, name: "Terça-feira" },
  { id: 3, name: "Quarta-feira" },
  { id: 4, name: "Quinta-feira" },
  { id: 5, name: "Sexta-feira" },
  { id: 6, name: "Sábado" },
];

function getTodayDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let todayDate = mm + "/" + dd;
  let whichWeekDay = today.getDay();
  const weekDay = daysWeek.map((day) =>
    day.id === whichWeekDay ? day.name : ""
  );

  return { todayDate, weekDay };
}

export default function BoxDiscipline() {
  const { todayDate, weekDay } = getTodayDate();

  return (
    <div className={styles.container}>
      <div className={styles.boxOne}>
        <h1 className="font-bold text-bone">{weekDay}</h1>
        <p className="text-bone">{todayDate}</p>
      </div>
      <div className={styles.boxTwo}>
        <h1 className="font-bold text-bone">Sistemas Distribuídos</h1>
        <p className="text-bone">Sala 1102 - às 19:10</p>
      </div>
    </div>
  );
}
