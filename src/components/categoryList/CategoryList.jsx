import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                    style
                </Link>

                <Link href={`blog`}  className={`${styles.category} ${styles.fashion}`}>
                    <Image src="/fashion.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                        Fashion
                </Link>

                <Link href={`blog`}  className={`${styles.category} ${styles.food}`}>
                    <Image src="/food.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                    Food
                </Link>

                <Link href={`blog`} className={`${styles.category} ${styles.travel}`}>
                    <Image src="/travel.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                    style
                </Link>

                <Link href={`blog`} className={`${styles.category} ${styles.culture}`}>
                    <Image src="/culture.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                    Culture
                </Link>

                <Link href={`blog`} className={`${styles.category} ${styles.coding}`}>
                    <Image src="/coding.png"
                        className={styles.image}
                        width={32} height={32} alt="" />
                    Stories
                </Link>

            </div>
        </div>
    );
};

export default CategoryList;