import { Header } from './components/Header'
import { Input } from './components/Input'

export function App() {
  return (
    <>
      <Header />

      <Input />

      <div>
        <p>Tarefas criadas</p>
        <p>Concluídas</p>
      </div>

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

    </>
  )
}


