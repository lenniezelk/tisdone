import Filter from './components/filter/Filter';
import List from './components/list/List';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className={styles.title}>Tis&apos; Done</h1>
        <section className="app">
          <Filter />
          <List />
        </section>
      </main>
    </div>
  );
}
