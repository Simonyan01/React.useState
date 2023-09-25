import styles from "./fontStyle.module.css"

const FontStyle = ({
    isBold,
    isItalic,
    isUnderline,
    setIsBold,
    setIsItalic,
    setIsUnderline
}) => {    
    return (
        <section className={styles.fontStyle}>
            <button
                className={styles.bold}
                style={{
                    backgroundColor: isBold && 'rgb(0, 0, 0, 0.4)'
                }}
                onClick={() => {
                    setIsBold((prev) => !prev);
                }}>B
            </button>
            <button
                className={styles.italic}
                style={{
                    backgroundColor: isItalic && 'rgb(0, 0, 0, 0.4)'
                }}
                onClick={() => {
                    setIsItalic((prev) => !prev)
                }}>I
            </button>
            <button
                className={styles.underline}
                style={{
                    backgroundColor: isUnderline && 'rgb(0, 0, 0, 0.4)'
                }}
                onClick={() => {
                    setIsUnderline((prev) => !prev)
                }}>U
            </button>
        </section>
    )
}

export default FontStyle;