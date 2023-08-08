
import Link from "next/link"
import styles from "./styles.module.css"

function Button({ text = "", link = "" }) {
    return (
        <div className={styles.button}>
            <Link href={link} className={styles.buttonlink} target="_blank"> 
                <span className={styles.buttonborder}>{text}</span>
            </Link>
        </div>
    )
}

export default Button