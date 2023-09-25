import { useState } from 'react'
import styles from "./content.module.css"
import FontStyle from './font style/FontStyle';
import Button from './buttons/Button';
import Box from "./colors/Box";
import RandomText from './random text/Random.jsx';

const Content = () => {
    const [isUnderline, setIsUnderline] = useState(false);
    const [isItalic, setIsItalic] = useState(false)
    const [isBold, setIsBold] = useState(false)
    const [color, setColor] = useState("black");
    const [size, setSize] = useState(35)

    return (
        <section className={styles.container}>
            <Box
                color={color}
                setColor={setColor}
            />
            <FontStyle
                isBold={isBold}
                isItalic={isItalic}
                isUnderline={isUnderline}
                setIsUnderline={setIsUnderline}
                setIsBold={setIsBold}
                setIsItalic={setIsItalic}
            />
            <span style={{
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: isUnderline ? 'underline' : 'none',
                fontSize: size,
                color
            }}>
                <RandomText />
            </span>
            <Button setSize={setSize} size={size} />
        </section>
    )
}

export default Content