import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Data from "../../../Data.json";
import styles from "./CalendarPage.module.css";

export default function CalendarPage() {
  const { isLight } = useTheme();
  const array = Data;

  return (
    <>
      {!isLight ? (
        <h1
          className={
            isLight
              ? `${styles.titleH1} ${styles.lightMode}`
              : `${styles.titleH1} ${styles.darkMode}`
          }
        >
          Caledrier de l'avent
        </h1>
      ) : (
        <h1
          className={
            isLight
              ? `${styles.titleH1} ${styles.lightMode}`
              : `${styles.titleH1} ${styles.darkMode}`
          }
        >
          Caledrier de l'avent censuré
        </h1>
      )}
      <div
        className={
          isLight
            ? `${styles.containerDate} ${styles.lightMode}`
            : `${styles.containerDate} ${styles.darkMode}`
        }
      >
        {array.map((element) => (
          <Link key={element.id} to={`/question/${element.id}`}>
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
