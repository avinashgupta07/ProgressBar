import "../styles.css";
import { useEffect } from "react";
export default ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  useEffect(() => {
    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span>{Math.min(100, Math.max(0, value.toFixed()))}%</span>
      <div
        style={{ transform: `scaleX(${value / 100})`, transformOrigin: "left" }}
      />
    </div>
  );
};
