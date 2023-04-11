import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
               <Image src="/gr.jpg" width={128} height={77} /> 
            </div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/ninjas"}>Ninjas</Link>
        </nav>
    );
}
 
export default Navbar;