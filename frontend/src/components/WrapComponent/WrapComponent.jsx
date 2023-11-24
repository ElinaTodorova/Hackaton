import PropTypes from "prop-types";
import { useTheme } from "../contexts/ThemeContext";
import styles from "./WrapComponent.module.css";

export default function WrapComponent({ children }) {
  const { isLight } = useTheme();

  return (
    <div className={isLight ? `${styles.darkMode}` : `${styles.lightMode}`}>
      {children}
    </div>
  );
}

WrapComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
