import Link from "next/link";
import styles from "./navbar.module.css";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className="">
                    <p>The Cozy Page</p>
                </div>
                <div className={styles.links}>
                    <ThemeToggle />
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/" className={styles.link}>Contact</Link>
                    <AuthLinks />
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;