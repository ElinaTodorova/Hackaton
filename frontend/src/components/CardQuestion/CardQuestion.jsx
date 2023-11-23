import { useParams } from "react-router-dom";
import Data from "../../../Data.json";
import styles from "./CardQuestion.module.css";

export default function CardQuestion() {
  const { id } = useParams();

  const dataTableau = Data;

  return (
    <div className={styles.questionContainer}>
      {dataTableau
        .filter((element) => Number(element.id) === Number(id))
        .map((question) => (
          <div className={styles.mainContainerCard} key={question.id}>
            <div className={styles.imageContainer}>
              <img src={question.image} alt="some" />
            </div>

            <p className={styles.question}> {question.question}</p>
            <div>
              <p className={styles.question}>{question.reponse}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
