import { Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task(props) {
  function handleDeleteTask() {
    props.onDeleteTask(props.content);
  }

  function handleMarkTaskAsDone() {
    props.onMarkTaskAsDone(props.content)
  }

  return (
    <div className={styles.task}>
      <button
        type="button"
        className={styles.circle}
        onClick={handleMarkTaskAsDone}
      >
        <Circle size={18} weight="bold" />
      </button>
      <p>{props.content}</p>
      <button
        type="button"
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
