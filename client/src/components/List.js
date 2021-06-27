import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMessage } from '../redux/actions/messageAction';
import '../css/List.css';

const List = ({ listData }) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const updateMessages = (messageId) => {
    dispatch(updateMessage(message, messageId));
    document
      .querySelector(`.list-${messageId}`)
      .classList.remove('input-focus-style');
    setDisabled(true);
  };

  const editMessage = (messageId) => {
    setDisabled(false);
    document
      .querySelector(`.list-${messageId}`)
      .classList.add('input-focus-style');
  };

  return (
    <div className="list">
      {listData ? (
        listData?.map((item, index) => (
          <div className="list-container" key={item._id}>
            <input
              type="text"
              placeholder={item.message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={disabled}
              className={`list-${item._id}`}
            />
            <button onClick={() => editMessage(item._id)}>EDIT</button>
            <button onClick={() => updateMessages(item._id)}>UPDATE</button>
          </div>
        ))
      ) : (
        <p>No Messages</p>
      )}
    </div>
  );
};

export default List;
