import { Circle, CheckCircle,Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  title: string,
  isChecked: boolean,
  onDeleteTask: (title: string) => void,
  onMarkTaskAsDone: (title: string) => void,

}

export function Task(props:TaskProps) {
  function handleDeleteTask() {
    props.onDeleteTask(props.title);
  }

  function handleMarkTaskAsDone() {
    props.onMarkTaskAsDone(props.title)
  }

  return (
    <div className={props.isChecked ? styles.taskChecked : styles.task}>

      {/*  */}
      {!props.isChecked && <button
        type="button"
        className={styles.button}
        onClick={handleMarkTaskAsDone}
      >
        <Circle size={18} weight="bold" />
      </button>}
     
      {props.isChecked && <button
        type="button"
        className={styles.button}
        onClick={handleMarkTaskAsDone}
      >
        <CheckCircle size={18} weight="fill" />
      </button>}
      
      <p className={styles.p}>{props.title}</p>
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
