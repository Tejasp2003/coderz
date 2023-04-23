import React from "react";
import SideBar from "./SideBar";
import styles from "../styles/Events.module.css";

function Events() {
  return (
    <>
      <SideBar />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>Learn DSA</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCO65vTW0qF8xZWfdKDyfnDNkN7PQ"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>Learn Frontend development</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/zJSY8tbf_ys/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBp8odytXUljnKPGYwkGhjFf6Atew"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=zJSY8tbf_ys";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>Blockchain Course</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/gyMwXuJrbJQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxwNK9cK-qnjYaMgyGQbI9SeUGBw"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=gyMwXuJrbJQ";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>React Course</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/RVFAyFWO4go/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBiNiBMQT9XXFuDYJhNbD4Mui5uJg"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=RVFAyFWO4go&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&index=4";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>Angular Course</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/3qBXWUpoPHo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPAw_Hv_x3yaUCRCbKEw4cUo556A"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=3qBXWUpoPHo&t=30s&pp=ygUMZnJlZWNvZGVjYW1w";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h3>Figma Course</h3>
          </div>
          <div className={styles.border_line}></div>
          <div className={styles.card_body}>
            <img
              src="https://i.ytimg.com/vi/jwCmIBJ8Jtc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBncGklgrVWORGLMPVM9r7grWozKw"
              alt=""
            />
          </div>
          <div className="styles.learn">
            <button
              className={styles.start_learn}
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=jwCmIBJ8Jtc&t=28514s&pp=ygUMZnJlZWNvZGVjYW1w";
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
