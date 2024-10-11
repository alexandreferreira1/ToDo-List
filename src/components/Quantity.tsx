import styles from './Quantity.module.css'

interface Quantity {
    created: number,
    isDone: number
}

export function Quantity(props: Quantity) {
    return (
        <div className={styles.quantity}>
            <div className={styles.column}>
                <p className={styles.created}>Tarefas criadas</p>
                <p className={styles.result}>{props.created}</p>
            </div>

            <div className={styles.column}>
                <p className={styles.completed}>Concluídas</p>
                <p className={styles.result}>{props.isDone} de {props.created}</p>
            </div>
        </div>

    )
}
