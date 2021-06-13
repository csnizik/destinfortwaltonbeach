import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import Sidebar from '../02-molecules/navigation/Sidebar';
import Dashboard from '../04-templates/layouts/Dashboard';

import './Page.css';

const Home = () => {
  const pathName = useLocation().pathname; // Home path /
  return (
    <div
      className={classNames(
        'container',
        'bg-white-dark',
        'min-h-screen',
        'overflow-hidden',
        'space-between-3',
        'flex',
        'shadow'
      )}
      id='container'>
      
      <section
        className={classNames('min-h-screen')}
        id='sidebar'>
        <Sidebar pathName={pathName} />
      </section>

      {/* Be aware that the active menu item's style has pseudo classes that extend pieces of off-white background beyond the sidebar's  width. They should remain safely within the main content section's padding, but if they ever overflow on top of anything in main content, fix it by setting a class of z-10 here. */}
      <main className={classNames('min-h-screen','sm:w-full')}> 
        <Dashboard pathName={pathName} />
      </main>
    </div>
  );
};

export default Home;
