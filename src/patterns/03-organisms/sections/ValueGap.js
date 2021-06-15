import React from 'react';
import classNames from 'classnames';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from 'react-google-charts';

const ValueGap = ({ pathName, classes, width, height, ...props }) => {
  const legend =  pathName === '/value' ? {
    textStyle: {
      color: '#48AAED',
      fontSize: 16,
      bold: true,
    },
  } : 'none';
  return (
    <section className={classNames(classes)}>
      <Card
        iconType='Graph'
        iconColor='NavySky'
        iconSize='small'
        heading='Value Gap'
        subheading='Measures decreased dark green gap'
        pathName={pathName}
        link='/value'>
        <Chart
          width={width}
          height={height}
          chartType='ComboChart'
          loader={<div>Loading Chart</div>}
          formatters={{
            type: 'DateFormat',
            column: 0,
            options: {
              pattern: 'MMMM yyyy',
            }
          }}
          data={[
            ['Month', 'FY 2019 Revenue', 'FY 2019 Occupancy', 'FY 2020 Occupancy'],
            [new Date(2020, 0), 10, 60, 70],
            [new Date(2020, 1), 8, 50, 60],
            [new Date(2020, 2), 7, 45, 50],
            [new Date(2020, 3), 7.5, 55, 60],
            [new Date(2020, 4), 8, 75, 80],
            [new Date(2020, 5), 11, 60, 84],
            [new Date(2020, 6), 11, 30, 80],
            [new Date(2020, 7), 20, 55, 85],
            [new Date(2020, 8), 30, 80, 90],
            [new Date(2020, 9), 70, 83, 85],
            [new Date(2020, 10), 65, 70, 73],
            [new Date(2020, 11), 50, 72, 65],
          ]}
          options={{
            legend: legend,
            title: 'TDT Collections ($ millions)',
            vAxis:  {
              0: {
                title: 'TDT Collections ($ millions)',
                titleTextStyle: { bold: true, italic: false },
                textPosition: 'none',
                minorGridlines: {
                  color: '#fff'
                }
              }
            },
            hAxis: {
              0: {
                format: 'MMM',
                gridlines: {
                  color: '#fff'
                }
              }
            },
            seriesType: 'bars',
            series: {
              1: {type: 'line'},
              2: {type: 'line'}
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Card>
    </section>
  );
};

export default ValueGap;
