import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const CarsList = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Cars list</h1>

      <ul>
        <li>
          <Link href="/cars/tesla">
            <a>Lucid</a>
          </Link>
        </li>
        <li>
          <Link href="/cars/ford">
            <a>Ford</a>
          </Link>
        </li>
        <li>
          <Link href="/cars/lambo">
            <a>Lambo</a>
          </Link>
        </li>
      </ul>
    </main>
  </div>
);

export default CarsList;
