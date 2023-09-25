import { useState } from "react";
import { refreshButton, strings } from "./Random";
import styles from "./random.module.css"

const Random = () => {
    const [isRotated, setIsRotated] = useState(0);
    const [displayString, setDisplayString] = useState(strings[0]);

    const handleRotate = () => {
        setIsRotated(isRotated === 0 ? 360 : 0)
    };

    const handleRefresh = () => {
        const randomIndex = Math.floor(Math.random() * strings.length);
        setDisplayString(strings[randomIndex])
    };

    return (
        <section className={styles.randomTextContainer}>
            {
                strings.map((_, i) => {
                    return (
                        <span key={i}>
                            {i === 0 && displayString}
                        </span>
                    )
                })
            }
            <img style={{ transform: `rotate(${isRotated}deg)` }}
                onClick={() => {
                    handleRotate()
                    handleRefresh()
                }}
                src={refreshButton}
                alt="Refresh button"
            />
        </section>
    )
}

export default Random