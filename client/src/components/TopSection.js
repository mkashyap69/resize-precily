import React from 'react';
import TopSectionAdd from './TopSectionAdd';
import '../css/TopSection.css';
import TopSectionCount from './TopSectionCount';

const TopSection = ({ width, height, onResize, count }) => {
  return (
    <div className="container--flex-top">
      <TopSectionCount
        width={width}
        height={height}
        count={count}
        onResize={onResize}
      />
      <TopSectionAdd width={width} height={height} onResize={onResize} />
    </div>
  );
};

export default TopSection;
