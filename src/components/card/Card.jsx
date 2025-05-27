import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.detail}>27.05.2025 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Exploring the Soul of a Timeless Culture</h1>
                </Link>
                <p className={styles.desc}>Dive into the vibrant soul of Indian culture — a civilization rooted in thousands of years of history, diversity, and spiritual depth. Echoes of India brings you intimate stories, colorful festivals, classical arts that define the Indian experience today.</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    );
};

export default Card;