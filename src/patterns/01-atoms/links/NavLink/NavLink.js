import React from 'react';
import { NavLink as NavigationLink } from 'react-router-dom';
import Icon from '../../images/Icon/Icon';
import classNames from 'classnames';

const NavLink = ({ pathName, url, title, iconType, ...props }) => {
  return (
      <li
          
      className={classNames(
        `pn-${pathName}--url-${url}--title-${title}--it=${iconType}`,
        'list-none',
        'ml-2',
        'py-4',
        'pl-4',
        'rounded-bl-full',
        'rounded-tl-full',
        url === pathName ? 'nav-item--active' : '',
        url
      )}>
      <div className={classNames('flex', 'flex-row', 'items-center', 'w-56', 'listItem')}>
        <div className={classNames('listItemIcon')}>
                  <Icon type={iconType} size='Medium' color={url === pathName ? 'black' : 'teal'} />
        </div>
        <div className={classNames('pl-3', 'listItemText', url === pathName ? 'text-black' : 'text-teal')}>
          <NavigationLink to={url}>{title}</NavigationLink>
        </div>
      </div>
    </li>
  );
};

export default NavLink;
