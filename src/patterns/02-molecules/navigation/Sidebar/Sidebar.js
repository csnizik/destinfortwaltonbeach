import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon';
import Logo from '../../../01-atoms/images/Logo/Logo';
import NavLink from '../../../01-atoms/links/NavLink/NavLink';

import './Sidebar.css';

function Sidebar({ pathName, ...props }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <input
        type='checkbox'
        checked={isExpanded}
        className={classNames('openSidebarMenu', 'transition-all', 'box-border', 'hidden')}
        id='openSidebarMenu'
      />
      <div
        id='sidebarMenu'
        className={classNames(
          'min-h-full',
          'bg-blue-dark',
          'flex',
          'flex-col',
          'items-end',
          'justify-start'
        )}>
        <div className={classNames('self-start', 'w:self-auto', 'w-20', 'sm:w-64')}>
          <Logo size='Full' />
        </div>
        {/* <div className={classNames('nav-item--active')}></div> */}

        <ul id='page-nav'>

          <NavLink pathName={pathName} url="/" title="Dashboard" iconType="Dashboard" key="dashboard" />
          <NavLink pathName={pathName} url="/markets" title="Top Markets" iconType="Network" key="markets"/>
          <NavLink pathName={pathName} url="/water" title="Water Adventures" iconType="Pin" key="water" />
          <NavLink pathName={pathName} url="/value" title="Value Gap" iconType="Graph" key="value" />
          <NavLink pathName={pathName} url="/confidence" title="Tourism Confidence" iconType="ThumbsUp" key="confidence"/>
          <NavLink pathName={pathName} url="/sentiment" title="Family Sentiment" iconType="Video" key="sentiment"/>
          
        </ul>
        <label
          id='sidebarIcon'
          htmlFor='openSidebarMenu'
          className={classNames(
            'md:hidden',
            'transition-all',
            'box-border',
            'absolute',
            'z-50',
            'h-12',
            'w-12',
            'bottom-6',
            'left-4',
            'bg-teal',
            'rounded-full',
            'flex',
            'justify-center',
            'items-center',
            'ring-0'
          )}>
          <div className={classNames('cursor-pointer')} onClick={() => setIsExpanded(!isExpanded)}>
            <Icon type='SlideRight' />
          </div>
        </label>
      </div>
    </>
  );
}

export default Sidebar;
