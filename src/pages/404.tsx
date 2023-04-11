import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])

    return (
        <div className="not-found">
            <h1>Ooops sorry</h1>
            <h2>The page youre looking for is not found</h2>
            <p>
                Go back to 
                <Link href={"/"}> Homepage</Link>
            </p>
        </div>
    );
}
 
export default NotFound;