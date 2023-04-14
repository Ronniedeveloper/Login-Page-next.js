import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Profiler</h1>
            </div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/ninjas"}>Ninjas</Link>
        </nav>
    );
}
 
export default Navbar;