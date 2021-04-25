import React from 'react';

interface ILayout {
  theme: 'dark' | 'light';
}

export const Layout = ({ theme }: ILayout) => {
  return <div>{theme}</div>;
};
