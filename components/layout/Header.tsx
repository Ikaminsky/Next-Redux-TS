import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cs from 'classnames';

interface IHeader {
  links: Array<{ href: string; label: string }>;
  headerText: string;
  icon?: string;
  color?: string;
}

export const Header: React.FC<IHeader> = ({
  links,
  icon,
  headerText = 'Header text',
  color = 'grey darken-4',
}: IHeader) => {
  return (
    <nav>
      <div className={cs('nav-wrapper', color)}>
        <a className="brand-logo">
          <i className="material-icons pl-10">{icon}</i>
          {headerText}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {links.map(({ label, href }, key) => (
            <li key={href.concat(key.toString())}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  icon: 'cloud',
  color: 'black',
};
