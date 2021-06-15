import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ iconSize, iconType, iconColor, heading, subheading, link, pathName, ...props }) => {
  return (
    <div class={classNames(`w-full`, `rounded-lg`, `shadow`, `bg-white`, 'flex', `flex-col`, '')}>
      <div className={classNames(`flex`, `w-full`, `justify-between`, 'items-center')}>
        <div className={classNames('flex', 'flex-row', 'justify-center', 'items-center', 'pl-4')}>
          {iconType && <Icon size={iconSize} color={iconColor} type={iconType} classes='mr-2' />}
          <h2 className={classNames('hed2', 'text-blue-dark')}>{heading}</h2>
        </div>
        <div className={classNames(`items-center`, `flex`)}>
          <Link to={pathName === link ? '/' : link}>
            <button
              className={classNames(
                `bg-teal-dark`,
                `text-white`,
                `rounded-tr-lg`,
                `rounded-bl-lg`,
                `focus:outline-none`,
                `hover:bg-teal-light`,
                `w-12`,
                `h-12`,
                `font-sans`,
                'flex',
                'justify-center',
                'items-center'
              )}>
              <Icon color='Navy Sky' size='Small' type={pathName === link ? 'X' : 'MagnifyingGlass'} />
            </button>
          </Link>
        </div>
      </div>
      <div className={classNames('px-4')}>
        <div className={classNames('text-gray-500')}>{subheading}</div>
      </div>
      <div className={classNames('p-4')}>{props.children}</div>
    </div>
  );
};

export default Card;
