import Data from "../../Data.json";

export default function CalendarPage() {
  const array = Data;

  return (
    <div>
      <img alt="array.id" src={array[0].image} />
      <p>{array[0].question}</p>
    </div>
  );
}
