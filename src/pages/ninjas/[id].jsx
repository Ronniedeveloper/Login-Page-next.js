import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = await context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }

}

const Detail = ({ ninja }) => {
    return (
       <>
        <Head>
            <title>Ninjas | {ninja.name}</title>
        </Head>
        <div>
            <h1>{ninja.name}</h1>
            <p>Nickname: { ninja.username}</p>
            <p>Email address: { ninja.email}</p>
            <p>City: { ninja.address.city}</p>
            <p>Street adress: { ninja.address.street}</p>
            <p>Website: { ninja.website}</p>
            <p>Company name: { ninja.company.name}</p>
            <p>Company slogan: { ninja.company.catchPhrase}</p>
            <p>Favorite quote: { ninja.company.bs}</p>


        </div>
       </>
    );
}
 
export default Detail;