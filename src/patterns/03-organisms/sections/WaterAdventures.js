import classNames from 'classnames';
import React from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from '../../02-molecules/blocks/Chart/Chart';

const WaterAdventures = ({ pathName, classes, ...props }) => {
  const width = pathName === '/water' ? 800 : 280;
  const height = pathName === '/water' ? 800 : 470;
  const legend = pathName === '/water' ? { textStyle: { color: 'blue', fontSize: 16 } } : 'none';
  const subTitle = pathName === '/water' ? 'Measures an increase in water based, family adventures taken' : '';
  return (
    <section className={classNames(classes)}>
      <Card
        iconType='Pin'
        iconColor='NavySky'
        iconSize='small'
        heading='Water Adventures'
        subheading={pathName === '/markets' ? 'Measures an increase in water based, family adventures taken' : ''}
        pathName={pathName}
        link='/water'>
        <Chart
          width={width}
          height={height}
          chartType='Bar'
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Total Water Adventures', { role: 'style' }],
            ['2019', 6.94, '#124168'],
            ['2020', 8.49, '#48AAED'],
            ['2021', 10.49, '#77DBDB'],
          ]}
          options={{
            legend: legend,
            chart: {
              subtitle: subTitle,
              bar: { groupWidth: '100%' },
              legend: legend,
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </Card>
    </section>
  );
};

export default WaterAdventures;
