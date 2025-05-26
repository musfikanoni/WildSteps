import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>WildSteps here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <h1>Every journey has a story. Moments captured between the miles.</h1>
                    <p>Welcome to a space where journeys turn into stories. This blog captures the heart of travel — not just places, but the people, moments, and memories that shape the path. From hidden alleys to faraway coasts, each post is a story waiting to be lived. Pack light, read deep, and wander with words.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;