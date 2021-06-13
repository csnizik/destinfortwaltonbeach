import React from 'react';
import classNames from 'classnames';

import './Card.css';
import { PreviousMap } from 'postcss';

const GridCard = ({ ctaText, ...props }) => {
  return (
    <div className={props.classes}>
      <div class={classNames(ctaText ? `rounded-t-lg` : `rounded-lg`, `shadow`, `bg-white`, `flex`, `flex-col`)}>
        <div className={classNames('p-4')}>{props.children}</div>
      </div>

      {ctaText && (
        <div className={classNames('rounded-b-lg', 'shadow', 'bg-teal-dark', 'flex', 'p-4', 'justify-center')}>
          <button>
            <h3 className={classNames('hed3')}>{ctaText}</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default GridCard;
