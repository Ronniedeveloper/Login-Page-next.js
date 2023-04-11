import styles from '../../styles/ninjas.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();

    return {
        props: { ninjas: user}
    }
}

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h1>Ninja List</h1>
            { ninjas.map(ninja => (
                <div key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Ninjas;