import classNames from 'classnames';
import React from 'react';
import StoryCardContainer from '../../02-molecules/blocks/Card/StoryCardContainer';

const FamilySentiment = ({ pathName, classes, width, height, ...props }) => {
  return (
    <section className={classNames(classes)}>
      <StoryCardContainer heading="Family Sentiment" />
    </section>
  );
};

export default FamilySentiment;
