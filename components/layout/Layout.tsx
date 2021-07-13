import React from 'react';

interface ILayout {
  theme: 'dark' | 'light';
}

export const Layout: React.FC<ILayout> = ({ theme }) => {
  return <div>{theme}</div>;
};
