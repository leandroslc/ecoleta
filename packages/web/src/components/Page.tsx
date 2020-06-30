import React, { FC } from 'react';

export const Page: FC = ({ children }) => {
  return (
    <div className="page">
      {children}
    </div>
  );
}
