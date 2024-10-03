import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Quantity } from "./components/Quantity";
import styles from "./App.module.css";
import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { NoTask } from "./components/NoTask";

export function App() {
  const [tasks, setTasks] = useState([]);
  // const [done, setDone] = useState([''])

  function handleNewTask(event) {
    event.preventDefault();

    if (event.target.taskName.value !== "") {
      const createNewTask = {
        title: event.target.taskName.value,
        isChecked: true,
      };

      setTasks([...tasks, createNewTask]);

      event.target.taskName.value = "";
    } else {
      window.alert("Digite a tarefa a ser realizada!");
    }
  }

  function deleteTask(task) {
    console.log(`Deletar tarefa ${task}`);

    const newArrayWithoutThisTask = tasks.filter(
      (tasksFiltered) => tasksFiltered !== task
    );

    setTasks(newArrayWithoutThisTask);
  }

  function markTaskAsDone(title) {
    console.log(`Marcar tarefa ${title} como feita`);

    const tasksUpdated = tasks.map((task) => {
      if (task.title === title) {
        return { title: task.title, isChecked: !task.isChecked };
      }

      return task;
    });

    setTasks(tasksUpdated);
  }

  return (
    <>
      <Header />

      {/* Input para adicionar tarefa */}
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

      {/* Quantidade de tarefas criadas e concluídas */}
      <Quantity created={tasks.length} />

      {/* Se o Estado de tarefas for 0, então vai renderizar o ícone */}
      {tasks.length === 0 ? (
        <NoTask />
      ) : (
        <div className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <Task
                key={task}
                title={task.title}
                isChecked={task.isChecked}
                onDeleteTask={deleteTask}
                onMarkTaskAsDone={markTaskAsDone}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
