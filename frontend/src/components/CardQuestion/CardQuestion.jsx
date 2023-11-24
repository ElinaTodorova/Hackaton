import { useParams } from "react-router-dom";
import Data from "../../../Data.json";
import DataBis from "../../../DataBis.json";
import styles from "./CardQuestion.module.css";
import Header from "../Header";
import { useTheme } from "../contexts/ThemeContext";

export default function CardQuestion() {
  const { isLight } = useTheme();
  const { id } = useParams();
  let dataTableau = "";
  if (!isLight) {
    dataTableau = Data;
  } else {
    dataTableau = DataBis;
  }

  return (
    <>
      <Header />
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
                <p className={styles.answer}>{question.reponse}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
