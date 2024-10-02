import styles from './Quantity.module.css'

export function Quantity(props) {
    return (
        <div className={styles.quantity}>
            <div className={styles.column}>
                <p className={styles.created}>Tarefas criadas</p>
                <p className={styles.result}>{ props.created }</p>
            </div>

            <div className={styles.column}>
                <p className={styles.completed}>Concluídas</p>
                <p className={styles.result}>0</p>
            </div>
        </div>

    )
}
