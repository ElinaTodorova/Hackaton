import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="./images/logo.png" alt="LOGO Santa's Elves" />
    </div>
  );
}
