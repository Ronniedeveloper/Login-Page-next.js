import Link from "next/link"
import Footer from "../../comps/Footer"
import Navbar from "../../comps/Navbar"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Ladies and gentle straight to the main event of the evening the man in the red conner number of fights eight he has lost one and run away from one his aluta the great</p>
      <p className={styles.text}>Ladies and gentle straight to the main event of the evening the man in the red conner number of fights eight he has lost one and run away from one his aluta the great</p>
      <Link href={"/ninjas"} className={styles.btn}>Ninjas
        Ninjas
      </Link>
    </div>
  )
}
