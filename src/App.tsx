import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Quantity } from "./components/Quantity";
import styles from "./App.module.css";
import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { NoTask } from "./components/NoTask";

export function App() {
  const [createTask, setCreateTask] = useState([]);
  // const [done, setDone] = useState([''])

  function handleNewTask(event) {
    event.preventDefault();

    if (event.target.taskName.value !== "") {
      const taskName = event.target.taskName.value;

      setCreateTask([...createTask, taskName]);

      event.target.taskName.value = "";
    } else {
      window.alert("Digite a tarefa a ser realizada!");
    }
  }

  function deleteTask(task) {
    console.log(`Deletar tarefa ${task}`);

    const newArrayWithoutThisTask = createTask.filter(tasksFiltered => tasksFiltered !== task)

    setCreateTask(newArrayWithoutThisTask)
  }

  function markTaskAsDone(task) {
    console.log(`Marcar tarefa ${task} como feita`);
  }


  return (
    <>
      <Header />

      <div className={styles.input}>
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="taskName"
          />
          <button type="submit">
            Criar
            <PlusCircle size={18} weight="regular" />
          </button>
        </form>
      </div>

      <Quantity created={createTask.length} />

      {createTask.length === 0 ? (
        <NoTask />
      ) : (
        <div className={styles.tasks}>
          {createTask.map((task) => {
            return <Task key={task} content={task} onDeleteTask={deleteTask} onMarkTaskAsDone={markTaskAsDone} />;
          })}
        </div>
      )}
    </>
  );
}
