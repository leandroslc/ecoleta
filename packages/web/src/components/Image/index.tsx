/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ImgHTMLAttributes } from 'react';
import styles from './styles';

type ImageProps = ImgHTMLAttributes<unknown>;

export const Image: FC<ImageProps> = (props) => {
  const { src, alt, ...otherProps } = props;
  return <img css={styles.img} src={src} alt={alt} {...otherProps} />;
};
