import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo} >
                <img src={"assets/rocket.png"} alt="RocketSeat Logo" />
                <div>
                    <span className={styles.to}>to</span>
                    <span className={styles.do}>do</span>
                </div>
            </div>

        </div>

    )
}
