import React from 'react';
import classNames from 'classnames';
import AtAGlance from '../../03-organisms/sections/AtAGlance';
import TopMarkets from '../../03-organisms/sections/TopMarkets';
import WaterAdventures from '../../03-organisms/sections/WaterAdventures';
import ValueGap from '../../03-organisms/sections/ValueGap';
import TourismConfidence from '../../03-organisms/sections/TourismConfidence';
import FamilySentiment from '../../03-organisms/sections/FamilySentiment';
import Button from '../../01-atoms/buttons/Button';
import Icon from '../../01-atoms/images/Icon/Icon';

const Dashboard = ({ pathName, ...props }) => {
  const pageHeading = (path) => {
    switch (path) {
      case '/markets':
        return 'Top Markets';
      case '/water':
        return 'Water Adventures';
      case '/value':
        return 'Value Gap';
      case '/confidence':
        return 'Tourism Confidence';
      case '/sentiment':
        return 'Family Sentiment';
      default:
        return 'Dashboard';
    }
  };

  let loggedIn = true; //TODO: replace

  return (
    <div className={classNames('flex', 'flex-col', 'h-full', 'w-screen', 'sm:w-full', 'bg-white-dark', 'p-10')}>
      <div
        className={classNames('h-auto', 'flex', 'flex-col', 'sm:flex-row', 'justify-between', 'items-center', 'mb-4')}
        id='r1'>
        <div className={classNames('flex', 'flex-row', 'items-end')}>
          {pathName === '/' && <h1 className={classNames('hed1', 'text-black')}>{pageHeading(pathName)}</h1>}
          {loggedIn && (
            <p className={classNames('xs', 'pl-4', 'sm:pb-2', 'flex', 'text-gray-500', 'italic')}>
              <Icon type='Pencil' size='s' classes={classNames('mr-1')} />
              Edit Layout
            </p>
          )}
        </div>
        {loggedIn && (
          <Button>
            <div className={classNames('bg-blue-dark', 'text-white', 'w-8', 'py-2', 'mr-2', 'rounded-full')}>
              <p className={classNames('xs')}>FL</p>
            </div>
            Firstname Lastname
          </Button>
        )}
        {!loggedIn && <Button classes='px-6'>Login</Button>}
      </div>
          
      {pathName === '/markets' && <TopMarkets width='800px' height='800px' pathName={pathName} />}
      {pathName === '/water' && <WaterAdventures width='800px' height='800px' pathName={pathName} />}
      {pathName === '/value' && <ValueGap width='1200px' height='800px' pathName={pathName} />}
      {pathName === '/confidence' && <TourismConfidence width='800px' height='800px' pathName={pathName} />}
      {pathName === '/sentiment' && <FamilySentiment width='800px' height='800px' pathName={pathName} />}
      {pathName === '/' && (
        <>
          <div className={classNames('h-auto', 'w-full', 'mb-8')} id='r2'>
            <AtAGlance />
          </div>
          <div
            className={classNames(
              'h-auto',
              'w-full',
              'flex',
              'flex-col',
              'xl:flex-row',
              'justify-between',
              'items-center',
              'xl:items-start'
            )}
            id='r3'>
            <div className={classNames('h-auto', 'w-full', 'pr-0', 'xl:pr-4', 'flex', 'flex-col')} id='r3c1'>
              <div className={classNames('w-full', 'mb-8', 'h-auto')} id='r3c1ra'>
                <TopMarkets link={'/markets'} width='300px' height='300px' />
              </div>
              <div
                className={classNames('h-full', 'w-full', 'flex', 'flex-col', 'lg:flex-row', 'justify-between')}
                id='r3c1rb'>
                <div
                  className={classNames('h-auto', 'w-full', 'lg:mr-2', 'mb-8', 'lg:mb-0', 'lg:w-auto')}
                  id='r3c1rbca'>
                  <ValueGap width="300px" height="300px" link="/value"/>
                </div>
                <div className={classNames('h-auto', 'flex-grow', 'lg:ml-2 ', 'lg:w-auto')} id='r3c1rbcb'>
                  <TourismConfidence width="300px" height="300px" link='/confidence' />
                </div>
              </div>
            </div>
            <div
              className={classNames(
                'h-auto',
                'w-full',
                'xl:w-1/3',
                'mt-8',
                'pl-0',
                'xl:pl-4',
                'xl:mt-0',
                'flex',
                'flex-col'
              )}
              id='r3c2'>
              <div className={classNames('mb-8')} id='r3c2ra'>
                <WaterAdventures width='300px' height='300px' link='/water' />
              </div>

              <div className={classNames()} id='r3c2rb'>
                <FamilySentiment />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
