
import Homepage from '@/components/homepage'
import styles from './page.module.css'
import Projectspage from '@/components/projectspage'
import About from '@/components/about'
import Contact from '@/components/contact'

export default function Pages() {


  return (
    <div className={styles.pages}>
      <section><Homepage /></section>
      <section><Projectspage /></section>
      <section><About /></section>
      <section><Contact /></section>
    </div>
  )
}
