import Link from "next/link";
import styles from "./styles.module.css";

function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <div className={styles.contactbox}>
                <div className={styles.border}>
                    <span className={styles.generaltext}>CONTATO</span>
                    <span className={styles.textgeral2}>
                        Fique à vontade para entrar em contato comigo para discutir<br />
                        oportunidades de colaboração ou para obter mais informações.
                    </span>
                    <span className={styles.textname}>Telefone</span>
                    <Link className={styles.textdescription} target="_blank" href={"#"}>
                        <span>17992142475</span>
                    </Link>
                    <span className={styles.textname} >E-mail:</span>
                    <Link target="_blank" href={"https://criarmeulink.com.br/u/1691209051"} className={styles.textdescription}>
                        <span>caroldaga2@gmail.com</span>
                    </Link>
                    <span className={styles.textname}>Discord:</span>
                    <Link href={"https://discord.gg/7TjQPJhVvz"} className={styles.textdescription} target="_blank" >
                        <span>caroldg</span>
                    </Link>
                    <span className={styles.textname} >Instagram:</span>
                    <Link href={"#"} target="_blank" className={styles.textdescription}>
                        <span>carol@dgt</span>
                    </Link>
                </div>
                <Link href={"https://media.tenor.com/NlMWoX5pQiEAAAAd/axolotl-minecraft.gif"} target="_blank">
                    <img src="/img/minecraft-axolotl-bucket-512x512.png" alt />
                </Link>
            </div>
            <span className={styles.footer}>© 2023 Carol Portfólio. Todos os direitos reservados.</span>
        </div>
    );
}

export default Contact;
