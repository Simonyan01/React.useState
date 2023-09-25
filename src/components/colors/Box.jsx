import { useState } from "react";
import { getRandomColor } from "./randomColors.js";
import styles from "./box.module.css";

const Box = ({ setColor, color }) => {
    const [colors, setColors] = useState(["red", "green", "orange"]);

    const createBox = () => {
        const randomColor = getRandomColor();
        setColors([...colors, randomColor]);
    }

    const handleBoxClick = (prev) => {
        setColor(prev === color ? 'black' : prev);
    }

    const handleDeleteBox = (prev) => {
        setColors(colors.filter((c) => c !== prev))
    }
    return (
        <section className={styles.boxContainer}>
            <button className={styles.increment} onClick={createBox}>+</button>
            {colors.length > 0 ?
                colors.map((color, i) => (
                    <div div
                        key={i}
                        className={styles.box}
                        style={{ background: color }}
                        onClick={() => handleBoxClick(color)
                        }>
                        <button
                            className={styles.deleted}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteBox(color)
                            }}
                        > X
                        </button>
                    </div>

                )) : <h1 style={{
                    color: "black",
                    fontSize: "35px",
                    letterSpacing: "1px"
                }}>
                    Not Found
                </h1>
            }
        </section>
    );
}

export default Box;
