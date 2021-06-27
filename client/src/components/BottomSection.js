import React from 'react';
import { Resizable } from 'react-resizable';
import List from './List';
import '../css/BottomSection.css';

const BottomSection = ({ width, height, onResize, listData }) => {
  return (
    <div className="container--flex-bottom">
      <Resizable
        height={height}
        width={width}
        onResize={(event, data) => onResize(event, data)}
        resizeHandles={['s', 'e', 'n', 'w']}
        minConstraints={[20, 20]}
        maxConstraints={[Infinity, Infinity]}
      >
        <div
          className="container--flex-3"
          style={{
            width: 3 * width + 'vw',
            height: height + 'vh',
          }}
        >
          <h3>Here is your added data: </h3>
          <List listData={listData} />
        </div>
      </Resizable>
    </div>
  );
};

export default BottomSection;
