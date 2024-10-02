import styles from './NoTask.module.css'
import { ClipboardText } from "@phosphor-icons/react";

export function NoTask() {
    return (

        <div className={styles.board}>
            <div className={styles.icon}><ClipboardText size={56} weight='light' /></div>
            <div className={styles.notasks}>
                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}
