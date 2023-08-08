import Button from "../button"
import Navbar from "../navbar"
import styles from "./styles.module.css"
import TextHome from "./text"
import Link from "next/link"

function Homepage() {
    return (
        <div className={styles.home} id="home">
            <Navbar />
            <TextHome />
            <div className={styles.buttongeneral}>
                <Button
                    link="https://bio-amber.vercel.app/"
                    text="Contatos"
                />
                <Button  link="https://drive.google.com/file/d/1DaMjpSlUqvyKOYY0d8iy4fCKIwEBl0Xp/view?usp=drive_link"
                    text="Currículo"
                />
            </div>
        </div>
    )
}

export default Homepage