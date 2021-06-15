import classNames from 'classnames';
import React from 'react';
import Card from '../../02-molecules/blocks/Card/Card';
import Chart from '../../02-molecules/blocks/Chart/Chart';

const TopMarkets = ({ pathName, classes, width, height, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <Card
        iconType='Network'
        iconColor='Navy Sky'
        iconSize='small'
        heading='Top Markets'
        subheading='Increased arrivals from key markets and increased visitor spend per market'
        pathName={pathName}
        link='/markets'>
        <Chart
          title='Top Markets'
          width={width}
          height={height}
          chartType='GeoChart'
          data={[
            ['City', 'Total Spend', 'Arrivals'],
            ['Atlanta', 18688021, 102359],
            ['Dallas', 12693514, 53605],
            ['Chicago', 2571710, 9763],
            ['DC', 1860281, 6055],
            ['Nashville', 7455620, 33111],
            ['Detroit', 1539163, 6936],
            ['Minneapolis', 382824, 1717],
            ['Saint Louis', 4794885, 19638],
            ['Indianapolis', 1982138, 7998],
            ['Cincinnati', 3651065, 14541],
          ]}
          options={{
            region: 'US',
            displayMode: 'markers',
            colorAxis: { colors: ['#77DBDB', '#48AAED'] },
            resolution: 'provinces',
            enableRegionInteractivity: true,
            magnifyingGlass: {
              enable: true,
              zoomFactor: 12,
            },
            legend: { textStyle: { color: 'blue', fontSize: 16 } },
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey='YOUR_KEY_HERE'
          rootProps={{ 'data-testid': '1' }}
        />
      </Card>
    </section>
  );
};

export default TopMarkets;
