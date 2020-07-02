type Size = 'xs' | 'sm' | 'md' | 'lg';

const breakpoints: Record<Size, string> = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const bq = (size: Size) => breakpoints[size];
