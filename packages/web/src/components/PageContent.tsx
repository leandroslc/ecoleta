import React, { FC, PropsWithChildren } from 'react';

type PageContentProps = PropsWithChildren<{
  type?: 'card',
}>

export const PageContent: FC<PageContentProps> = (props) => {
  let className = 'page-content';

  if (props.type) {
    className = `${className}-${props.type}`;
  }
  return (
    <div className={className}>
      {props.children}
    </div>
  );
}
