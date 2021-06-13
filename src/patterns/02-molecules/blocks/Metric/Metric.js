import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon';

import './Metric.css';

const Metric = ({ value, trend, ...props }) => {
  return (
    <div className={classNames('flex','flex-row')}>
      <div
        className={classNames(
          `flex`,
          `flex-row`,
          `justify-center`,
          `items-center`,
          `py-0.5`,
          'text-xl',
          `lg:text-5xl`,
          `font-bold`,
          `${trend === 'up' ? 'text-green' : trend === 'down' ? 'text-red' : 'text-gray'}`,
          props.classes
        )}>
        <div className={classNames(`mr-1`, 'lg:mr-6', `w-5`)}>
          {(trend === 'up' || trend === 'down') && (
            <Icon size='Medium' type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'} />
          )}
        </div>
        <div className={classNames(`font-serif`)}>{value}</div>
      </div>
    </div>
  );
};

export default Metric;
