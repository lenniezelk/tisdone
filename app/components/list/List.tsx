import { Todo } from '@/app/types';
import Button from '../button/Button';
import Chip from '../Chip/Chip';
import styles from './List.module.css';

const items: Todo[] = [
  { id: '1', title: 'Buy milk', completed: false, categories: [] },
  {
    id: '2',
    title: 'Buy eggs',
    completed: false,
    categories: [
      { id: '1', title: 'Work', color: 'red' },
      { id: '2', title: 'Home', color: 'blue' },
    ],
  },
  {
    id: '3',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    completed: true,
    categories: [{ id: '1', title: 'Work', color: 'red' }],
  },
  { id: '4', title: 'Buy cheese', completed: false, categories: [] },
  {
    id: '5',
    title:
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    completed: true,
    categories: [{ id: '1', title: 'Work', color: 'red' }],
  },
];

export default function List() {
  return (
    <ul className={styles.list} aria-label="List of Todo items">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
            {item.categories.length > 0 && (
              <div className={styles.categories}>
                {item.categories.map((category) => {
                  return (
                    <Chip
                      key={category.id}
                      bgColor={category.color}
                      label={category.title}
                    />
                  );
                })}
              </div>
            )}
            <div className={styles.controls}>
              <label>
                <input type="checkbox" checked={item.completed} />
                Done
              </label>
              <div>
                <Button color="primary">Edit</Button>
                <Button color="danger">Delete</Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export type ListProps = {
  items: Todo[];
};
