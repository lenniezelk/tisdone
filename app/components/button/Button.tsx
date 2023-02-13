import React from 'react';
import styles from './Button.module.css';

export default function Button({
  color = 'primary',
  onClick,
  className,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: colorMap.get(color) }}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export type ButtonProps = {
  onClick?: () => void;
  color?: ButtonColor;
  className?: string;
};

const colorMap = new Map();
colorMap.set('primary', 'var(--primary-color)');
colorMap.set('danger', 'var(--danger-color)');
colorMap.set('secondary', 'var(--secondary-color)');

export type ButtonColor = 'primary' | 'danger' | 'secondary';
