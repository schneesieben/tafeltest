import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tafel}>
        <h1>Üeberschrift</h1>
        <span>Üeberschrift</span>
        <p>
          Irgend ein Text auf <b>einer</b> alten Tafel
        </p>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
          einen Tetxt
        </ul>
      </div>
      <div className={styles.description}>
        <p>
          Testdarstellung dür Schriften auf POS Display &nbsp;
          <strong>
            <code className={styles.code}>src/app/page.tsx</code>
          </strong>
        </p>
      </div>
    </main>
  );
}
