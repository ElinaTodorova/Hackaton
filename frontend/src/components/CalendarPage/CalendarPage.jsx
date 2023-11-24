import { Link } from "react-router-dom";
import Data from "../../../Data.json";
import styles from "./CalendarPage.module.css";

export default function CalendarPage() {
  const array = Data;

  return (
    <>
      <h1 className={styles.titleH1}>Caledrier de l'avent</h1>
      <div className={styles.containerDate}>
        {array.map((element) => (
          <Link to={`/question/${element.id}`} key={element.id}>
            <div className={styles.caseData}>
              <p>{element.id} décembre</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
