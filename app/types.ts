export type Category = {
  title: string;
  color: string;
  id: string;
};

export type Todo = {
  id: string;
  title: string;
  categories: Category[];
  completed: boolean;
};
