import classNames from 'classnames';
import React from 'react';
import GridCard from '../../02-molecules/blocks/Card/GridCard';
import Metric from '../../02-molecules/blocks/Metric';

const AtAGlance = ({ pathName, classes, ...props }) => {
  return (
    <GridCard ctaText='Show More Information'>
        <h2 className={classNames('hed2')}>At a Glance</h2>
        <div
          className={classNames(
            'flex',
            'flex-col',
            'lg:flex-row',
            'divide-y',
            'divide-x-0',
            'lg:divide-x',
            'lg:divide-y-0',
            'divide-gray-300',
            'divide-solid',
            // 'xl:space-x-6'
          )}>
        <div
          className={classNames(
            'lg:w-1/3',
            'flex',
            'flex-row',
            'lg:flex-col',
            'justify-start',
            'lg:justify-between',
            'items-center',
            'py-3',
                'lg:py-0'
              )}>
              <Metric value='12.7%' trend='up' />
              <h3 className={classNames('hed3','ml-2','lg:ml-0')}>Visa Spend Per Visitor</h3>
            </div>

            <div className={classNames('lg:w-1/3',
                'flex',
                'flex-row',
                'lg:flex-col',
                'justify-start',
                'lg:justify-between',
                'items-center',
                'py-3',
                    'lg:py-0')}>
              <Metric value='12.4%' trend='down' />
              <h3 className={classNames('hed3','ml-2','lg:ml-0')}>Visa Consumer Spend</h3>
          </div>
          
            <div className={classNames('lg:w-1/3',
                'flex',
                'flex-row',
                'lg:flex-col',
                'justify-start',
                'lg:justify-between',
                'items-center',
                'py-3',
                    'lg:py-0')}>
              <Metric value='0.6%' trend='up' />
              <h3 className={classNames('hed3','ml-2','lg:ml-0')}>ROAI</h3>
            </div>
          </div>
      </GridCard>
  );
};

export default AtAGlance;
