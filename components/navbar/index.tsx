import Link from "next/link"
import styles from "./styles.module.css"




function Navbar() {
    return (

        <div className={styles.nav}>
            <div className={styles.navsoon}>
                <span>Portifolio</span>
            </div>
            <div>
                <Link href={"#home"} className={styles.navlink}>
                    <span>{"home"}</span>
                </Link>
                <Link href={"#about"} className={styles.navlink}>
                    <span>{"bio"}</span>
                </Link>
                <Link href={"#project"} className={styles.navlink}>
                    <span>{"projetos"}</span>
                </Link>
                <Link href={"#contact"} className={styles.navlink}>
                    <span>{"contatos"}</span>
                </Link>
            </div>
            <img src="/img/Line.svg" alt="sksk" />
        </div>
    )
}

export default Navbar