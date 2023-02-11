import styles from './Chip.module.css';

export default function Chip({ label, onDelete, bgColor }: ChipProps) {
  return (
    <span className={styles.chip} style={{ backgroundColor: bgColor }}>
      {label}
      {onDelete && (
        <button className={styles.delete} onClick={onDelete}>
          x
        </button>
      )}
    </span>
  );
}

export type ChipProps = {
  label: string;
  onDelete?: () => void;
  bgColor?: string;
};
