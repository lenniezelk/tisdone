import { Category } from '@/app/types';
import Chip from '../Chip/Chip';
import styles from './Category.module.css';

export type FilterProps = {
  categories: Category[];
};

export default function Filter({ categories }: FilterProps) {
  return (
    <div className={styles.container}>
      {categories.map((category) => {
        return (
          <Chip
            key={category.id}
            label={category.title}
            bgColor={category.color}
          />
        );
      })}
    </div>
  );
}
