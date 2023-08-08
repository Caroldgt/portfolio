
import styles from "./styles.module.css"
import Link from "next/link"


function Card({ image = "", alt = "", link = "", text = "", description = "" }) {
    return (
        <div className={styles.cardgeral}>
            <div className={styles.card}>
                <Link href={link} className={styles.link} target="_blank">
                    <img className={styles.image} src={image} alt={alt} />
                    <span className={styles.generaltext}>{text}</span>
                    <span className={styles.description}>{description}</span>
                </Link>

            </div>
        </div>
    )
}

export default Card