import React from 'react';
import { Resizable } from 'react-resizable';
import '../css/TopSectionCount.css';

const TopSectionCount = ({ width, height, count, onResize }) => {
  return (
    <Resizable
      height={height}
      width={width}
      onResize={(event, data) => onResize(event, data)}
      resizeHandles={['s', 'e', 'n', 'w']}
      minConstraints={[20, 20]}
    >
      <div
        className="container--flex-1"
        style={{
          width: width + 'vw',
          height: height + 'vh',
        }}
      >
        <h1>Count</h1>
        <p>{count}</p>
      </div>
    </Resizable>
  );
};

export default TopSectionCount;
