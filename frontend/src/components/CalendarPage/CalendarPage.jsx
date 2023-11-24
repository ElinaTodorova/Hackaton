import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Data from "../../../Data.json";
import styles from "./CalendarPage.module.css";

export default function CalendarPage() {
  const { isLight } = useTheme();
  const array = Data;

  return (
    <>
      <h1 className={styles.titleH1}>Caledrier de l'avent</h1>
      <div
        className={
          isLight
            ? `${styles.containerDate} ${styles.lightMode}`
            : `${styles.containerDate} ${styles.darkMode}`
        }
      >
        {array.map((element) => (
          <Link to={`/question/${element.id}`}>
            <div key={element.id} className={styles.caseData}>
              <p>{element.id}</p>
              <p>Décembre</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
