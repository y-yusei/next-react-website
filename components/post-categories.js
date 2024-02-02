import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.hedding}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only">categories</span>
            </h3>
        
        <ul className={styles.list}>
            {categories?.map(({ name, sulg }) => (
                <li key={sulg}>
                    <Link href={'/blog/category/${sulg}'}>
                    {name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}