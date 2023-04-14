import styles from '../../styles/ninjas.module.css';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();

    return {
        props: { ninjas: user}
    }
}

const Ninjas = ({ninjas}) => {
    return (
        <>
            <Head>
                <title>Profiler | All Profiles</title>
            </Head>
            <div>
                <h1>Profile List</h1>
                { ninjas.map(ninja => (
                    <Link href={"/ninjas/" + ninja.id } key={ninja.id}>
                        <div className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </div>
                    </Link>
                 ))}
            </div>
        </>
        
    );
}
 
export default Ninjas;