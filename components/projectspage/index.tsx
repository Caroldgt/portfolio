import Navbar from "../navbar"
import Card from "./card"
import styles from "./styles.module.css"


function Projectspage() {
    return (
        <div className={styles.projects} id="project">
            <Card
                image="/img/image.png"
                alt="aa"
                link="https://bio-amber.vercel.app/"
                text="Bio"
                description="Minha Bio Social é um projeto de biografia digital focado na apresentação das suas redes sociais de maneira criativa e interativa. Através de ícones e textos, seus amigos, familiares e seguidores poderão se conectar com você em diferentes plataformas e acompanhar suas atividades online. Este projeto permite que você compartilhe sua presença digital de forma atraente e personalizada, criando uma conexão mais próxima com o seu público online."
            />
        </div>
    )
}

export default Projectspage