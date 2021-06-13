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
      {/* Tailwind's "space between" classes are not used here because even when the first element becomes invisible, it is still enumerated  as the first element, meaning unwanted margin gets added to the element that now appears to be first. */}
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

      {pathName === '/' && (
        <div className={classNames('h-auto', 'w-full', 'mb-8')} id='r2'>
          <AtAGlance />
        </div>
      )}
      <div
        className={classNames(
          'h-auto',
          'flex',
          'flex-col',
          'xl:flex-row',
          'justify-between',
          'items-center',
          'xl:items-start'
        )}
        id='r3'>
        {(pathName === '/' || pathName === '/markets' || pathName === '/value' || pathName === '/confidence') && (
          <div className={classNames('h-auto', 'w-full', 'xl:w-2/3', 'pr-0', 'xl:pr-4', 'flex', 'flex-col')} id='r3c1'>
            {(pathName === '/' || pathName === '/markets') && (
              <div className={classNames('w-full', 'mb-8', 'h-auto')} id='r3c1ra'>
                <TopMarkets />
              </div>
            )}
            <div
              className={classNames('h-full', 'w-full', 'flex', 'flex-col', 'lg:flex-row', 'justify-between')}
              id='r3c1rb'>
              {(pathName === '/' || pathName === '/value') && (
                <div
                  className={classNames('h-auto', 'w-full', 'lg:mr-2', 'mb-8', 'lg:mb-0', pathName === '/value' ? '' : 'lg:w-auto')}
                  id='r3c1rbca'>
                  <ValueGap />
                </div>
              )}
              {(pathName === '/' || pathName === '/confidence') && (
                <div className={classNames('h-auto', 'w-full', 'lg:ml-2 ', pathName === '/confidence' ? '' : 'lg:w-auto')} id='r3c1rbcb'>
                  <TourismConfidence />
                </div>
              )}
            </div>
          </div>
        )}
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
          {(pathName === '/' || pathName === '/water') && (
            <div className={classNames('mb-8')} id='r3c2ra'>
              <WaterAdventures />
            </div>
          )}

          {(pathName === '/' || pathName === '/sentiment') && (
            <div className={classNames()} id='r3c2rb'>
              <FamilySentiment />
            </div>
          )}
        </div>
      </div>
    </div>

    // <section
    //   className={classNames(
    //     'relative',
    //     'bg-white-dark',
    //     'min-w-screen',
    //     'min-h-screen',
    //     'p-8',
    //     'flex',
    //     'flex-col',
    //     'justify-between',
    //     'space-y-1'
    //   )}
    // >
    //   <div
    //     id="r1"
    //     className={classNames(
    //       pathName === '/' ? 'w-full' : 'hidden',
    //       'h-auto',
    //       'flex',
    //       'justify-between'
    //     )}
    //   >
    //     <div className={classNames('flex', 'justify-between', 'items-end')}>
    //       <h1 className={classNames('hed1', 'text-black')}>
    //         {pageHeading(pathName)}
    //       </h1>
    //       <p
    //         className={classNames(
    //           'xs',
    //           'pl-4',
    //           'pb-1',
    //           'flex',
    //           'text-black',
    //           'italic'
    //         )}
    //       >
    //         <div className={classNames('px-1', 'pb-1', 'text-gray-300')}>
    //           <Icon type="Pencil" color="Gray" size="s" />
    //         </div>
    //         Edit Layout
    //       </p>
    //     </div>
    //     <Button>Login</Button>
    //   </div>
    //   <div
    //     id="r2"
    //     className={classNames(
    //       'min-h-0',
    //       'min-w-0',
    //       pathName === '/' ? 'w-full' : 'hidden'
    //     )}
    //   >
    //     <AtAGlance classes="w-full" />
    //   </div>
    //   <div
    //     id="r3"
    //     className={classNames(
    //       'w-full',
    //       'flex',
    //       'flex-row',
    //       'items-start',
    //       'space-x-6',
    //       'justify-between'
    //     )}
    //   >
    //     <div
    //       id="r3c1"
    //       className={classNames(
    //         pathName === '/' ||
    //           pathName === '/markets' ||
    //           pathName === '/value' ||
    //           pathName === '/confidence'
    //           ? 'w-2/3'
    //           : 'hidden',
    //         'flex',
    //         'flex-col',
    //         'justify-between',
    //         'space-y-6'
    //       )}
    //     >
    //       <div
    //         id="r3c1r1"
    //         className={classNames(
    //           pathName === '/' || pathName === '/markets' ? 'w-full' : 'hidden'
    //         )}
    //       >
    //         <TopMarkets />
    //       </div>
    //       <div
    //         id="r3c1r2"
    //         className={classNames(
    //           'w-full',
    //           'flex',
    //           'flex-row',
    //           'justify-between',
    //           'items-start',
    //           'space-x-6'
    //         )}
    //       >
    //         <ValueGap
    //           classes={
    //             pathName === '/' || pathName === '/value' ? 'w-1/2' : 'hidden'
    //           }
    //         />
    //         <TourismConfidence
    //           classes={
    //             pathName === '/' || pathName === '/confidence'
    //               ? 'w-1/2'
    //               : 'hidden'
    //           }
    //         />
    //       </div>
    //     </div>
    //     <div
    //       id="r3c2"
    //       className={classNames(
    //         'flex-grow',
    //         'flex',
    //         'flex-col',
    //         'space-y-6',
    //         'justify-start'
    //       )}
    //     >
    //       <WaterAdventures
    //         classes={
    //           pathName === '/' || pathName === '/water' ? 'w-full' : 'hidden'
    //         }
    //       />
    //       <FamilySentiment
    //         classes={
    //           pathName === '/' || pathName === '/sentiment'
    //             ? 'w-full'
    //             : 'hidden'
    //         }
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Dashboard;
