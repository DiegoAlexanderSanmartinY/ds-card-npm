import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let titleToShow: string;
  title ? (titleToShow = title) : (titleToShow = product.title);

  return (
    <span className={`${className} ${styles.productDescription}`} style={style}>
      {titleToShow}
    </span>
  );
};
