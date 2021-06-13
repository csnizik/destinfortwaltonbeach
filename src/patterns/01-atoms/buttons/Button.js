import classNames from 'classnames';
import React from 'react';

import './Button.css';

const Button = ({ ...props }) => {
  return (
    <button
      className={classNames(
        'bg-white',
        'items-center',
        'flex',
        'justify-evenly',
        'rounded-full',
        'border',
        'border-gray-300',
        'min-w-max',
        'h-auto',
        'p-2',
        props.classes
      )}>
      {props.children}
    </button>
  );
};

export default Button;
