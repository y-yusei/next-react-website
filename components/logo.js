import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Lego( { box0n = false }) {
    return (
        <Link href ="/" className={box0n ? styles.box : styles.basic}>CUBE
        </Link>
    )
}