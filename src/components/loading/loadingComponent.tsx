import React, { useState, useEffect } from "react";
import styles from "./loadingStyle.module.css";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((text) => {
        switch (text) {
          case "Loading...":
            return "Loading.";
          case "Loading.":
            return "Loading..";
          case "Loading..":
            return "Loading...";
          default:
            return "Loading...";
        }
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles['loading']}`}>
      <div className={`${styles['loading-content']}`}>
        <div className={`${styles['spinner']}`}></div>
        <div className={`${styles['loading-text']}`}>{loadingText}</div>
      </div>
    </div>
  );
};

export default Loading;
