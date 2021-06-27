import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getMessages } from '../redux/actions/messageAction';
import '../css/TopSectionAdd.css';

const TopSectionAdd = ({ width, height, onResize }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.addMessage);

  const addContent = () => {
    dispatch(addMessage(message));
    setMessage('');

  };
  return (
    <Resizable
      height={height}
      width={width}
      onResize={(event, data) => onResize(event, data)}
      resizeHandles={['s', 'e', 'n', 'w']}
      minConstraints={[20, 20]}
    >
      <div
        className="container--flex-2"
        style={{
          width: 2 * width + 'vw',
          height: height + 'vh',
        }}
      >
        <div className="flip--card-content">
          <div className="flip--card-front">
            <button>Add Content</button>
          </div>
          <div className="flip--card-back">
            <input
              type="text"
              placeholder="Hi 🙋🏻‍♂️ Share anything 😃"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <p style={{ color: 'darkred' }}>
              {error ? 'Message cannot be of more than 150 words' : ''}
            </p>
            <button className="flip--card-add" onClick={addContent}>
              Add
            </button>
          </div>
        </div>
      </div>
    </Resizable>
  );
};

export default TopSectionAdd;
