import styles from './Input.module.css'

export function Input() {
    return (
        <div className={styles.input} >
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type="button">
                Criar
                <img src="" alt="" />
            </button>
        </div>
    )
}
