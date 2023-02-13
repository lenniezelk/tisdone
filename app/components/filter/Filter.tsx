import { Category } from '@/app/types';
import Button from '../button/Button';
import styles from './Filter.module.css';

const categories: Category[] = [
  { id: '1', title: 'Work', color: 'red' },
  { id: '2', title: 'Home', color: 'blue' },
  { id: '3', title: 'School', color: 'green' },
  { id: '4', title: 'Personal', color: 'yellow' },
  { id: '5', title: 'Persoooooooooooooooooonal', color: 'pink' },
];

export default function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <Button color="primary">Search</Button>
        <Button color="primary">Clear</Button>
      </div>
      <div className={styles.doneCategories}>
        <div className={styles.done}>
          <label>
            <input type="radio" name="completed" value="all" />
            All
          </label>
          <label>
            <input type="radio" name="completed" value="done" />
            Done
          </label>
          <label>
            <input type="radio" name="completed" value="!done" />
            Not Done
          </label>
        </div>
        <div className={styles.categories}>
          <select multiple className={styles.categorySelect}>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  value={category.id}
                  className={styles.categoryOption}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={styles.buttonBar}>
        <Button color="primary">Apply Filters</Button>
      </div>
    </div>
  );
}
