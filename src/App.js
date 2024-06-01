import ProgressBar from "./component/ProgressBar";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setScuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} onComplete={() => setScuccess(true)} />
      <span>{success ? "Complete" : "Loading.."}</span>
    </div>
  );
}
