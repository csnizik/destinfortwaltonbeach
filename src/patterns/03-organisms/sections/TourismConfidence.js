import classNames from 'classnames';
import React, { useState } from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from 'react-google-charts';

const TourismConfidence = ({ pathName, classes,  ...props }) => {
  const legend = pathName === '/confidence' ? { textStyle: { color: 'blue', fontSize: 16 } } : 'none';
  const width = pathName === '/confidence' ? 1200 : 300;
  const height = pathName === '/confidence' ? 800 : 300;
  return (
    <section className={classNames(classes)}>
      <Card
        iconType='ThumbsUp'
        iconColor='NavySky'
        iconSize='small'
        heading='Tourism Confidence'
        subheading='Measures local sentiment towards tourism'
        pathName={pathName}
        link='/confidence'>
        <Chart
          width={width}
          height={height}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Tourism Sentiment', 'Percent'],
            ['Against tourists', 20],
            ['Accepting of tourists', 80],
          ]}
          options={{
            // title: 'My Daily Activities',
            pieHole: 0.5,
            pieSliceText: 'Percent',
            pieSliceTextStyle: {
              color: 'black',
            },
            legend: legend,
            colors: ['#AFE1E2', '#48AAED'],
          }}
          rootProps={{ 'data-testid': '3' }}
        />
      </Card>
    </section>
  );
};

export default TourismConfidence;
