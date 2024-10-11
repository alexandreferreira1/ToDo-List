import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Quantity } from "./components/Quantity";
import styles from "./App.module.css";
import {FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { NoTask } from "./components/NoTask";

interface Task {
  title: string,
  isChecked: boolean
}


export function App() {
  // Estado que armazena as tarefas
  const [tasks, setTasks] = useState<Task[]>([]);

  // const [inputValue, setInputValue] = useState('')

  const [tasksDone, setTasksDone] = useState<Task[]>([])

  // Valida e insere um nova tarefa
  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement
    const inputTaskName = form.elements.namedItem('taskName') as HTMLInputElement

    const findDuplicateTask = tasks.some(task => task.title === inputTaskName.value)

    if (findDuplicateTask === true) {
      window.alert("Já existe uma tarefa com esse nome");
    } else if (inputTaskName.value !== "") {
      const createNewTask = {
        title: inputTaskName.value,
        isChecked: true,
      }; 

      setTasks([...tasks, createNewTask]);

      inputTaskName.value = "";
    } else {
      window.alert("Digite a tarefa a ser realizada");
    }
  }

  // Evento do botão deletar tarefa
  function deleteTask(title: string) {
    console.log(`Deletar tarefa ${title}`);

    const newArrayWithoutThisTask = tasks.filter(
      (task) => (task.title !== title)
    );

    setTasks(newArrayWithoutThisTask);
  }

  // Evento para marcar tarefa como concluída
  function markTaskAsDone(title: string) {
    console.log(`Marcar tarefa ${title} como feita`);

    const tasksUpdated = tasks.map((task) => {
      if (task.title === title) {
        return { title: task.title, isChecked: !task.isChecked };
      }

      return task;
    });

    // Atualiza o estado das tarefas e já ordena pelo isChecked
    setTasks(tasksUpdated.sort((task1, task2) => {return Number(task2.isChecked) - Number(task1.isChecked)}));

    // Atualiza o estado de tarefas concluídas
    setTasksDone(tasksUpdated.filter((task) => task.isChecked === false))


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
      <Quantity created={tasks.length} isDone={tasksDone.length} />

      {/* Se o Estado de tarefas for 0, então vai renderizar o componente NoTask, se não renderiza lista de tarefas */}
      {tasks.length === 0 ? (
        <NoTask />
      ) : (
        <div className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.title}
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
