import { useParams } from "react-router-dom";
import Data from "../../../Data.json";
import DataBis from "../../../DataBis.json";
import styles from "./CardQuestion.module.css";
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

  // const [dataTableau, setDataTableau] = useState(null);
  // if (!isLight) {
  //   setDataTableau(Data);
  // } else {
  //   setDataTableau(DataBis);
  // }

  return (
    <div
      className={
        isLight
          ? `${styles.positionContainer} ${styles.lightMode}`
          : `${styles.positionContainer} ${styles.darkMode}`
      }
    >
      <div className={styles.cardHover}>
        <div className={styles.questionContainer}>
          {dataTableau
            .filter((element) => Number(element.id) === Number(id))
            .map((question) => (
              <div className={styles.mainContainerCard} key={question.id}>
                <div className={styles.imageContainer}>
                  <img src={question.image} alt="some" />
                </div>

                <p className={styles.question}> {question.setup}</p>
                <div>
                  <p className={styles.answer}>{question.delivery}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
