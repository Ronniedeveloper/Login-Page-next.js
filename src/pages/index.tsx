import Link from "next/link"
import Footer from "../../comps/Footer"
import Navbar from "../../comps/Navbar"
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profiler | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>The Profiler for your profile</h1>
          <p>
            Ladies and gentle straight to the main event of the 
            evening the man in the red conner number of fights eight he has 
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
            lost one and run away from one his aluta the great
          </p>
        <Link href={"/ninjas"} className={styles.btn}>
          Profiles
        </Link>
      </div>
    </>
  )
}
