import { useParams } from "react-router-dom";
import Data from "../../../Data.json";
import styles from "./CardQuestion.module.css";

export default function CardQuestion() {
  const { id } = useParams();

  const dataTableau = Data;

  return (
    <div className={styles.questionContainer}>
      <div className={styles.mainContainerCard}>
        <div className={styles.imageContainer}>
          <img src={dataTableau[id - 1].image} alt="some" />
        </div>
        <p className={styles.question}> {dataTableau[id - 1].question}</p>
        <img src={dataTableau[id - 1].image} alt="" />
      </div>
    </div>
  );
}
