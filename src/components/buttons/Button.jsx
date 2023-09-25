import styles from "./button.module.css";

const Button = ({ setSize, size }) => {
    const handlerSize = (newSize) => {
        if (newSize > 10 && newSize < 100) {
            setSize(newSize)
        }
    }
    return (
        <section className={styles.buttonContainer}>
            <button
                className={styles.up}
                onClick={() => {
                    handlerSize(size + 5);
                }}> ↑
            </button>
            <button
                className={styles.down}
                onClick={() => {
                    handlerSize(size - 5)
                }}> ↓
            </button>
        </section>
    )
}

export default Button