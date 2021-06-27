import axios from 'axios';

export const getMessages = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_MESSAGES_START',
    });

    const { data } = await axios.get('http://localhost:9000/');

    dispatch({
      type: 'GET_MESSAGES_SUCCESS',
      payload: data,
    });
  } catch (error) {

    dispatch({
      type: 'GET_MESSAGES_FAIL',
      payload: error.response?.data
        ? error.response.data.message
        : error.message,
    });
  }
};

export const addMessage = (message) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'ADD_MESSAGES_START',
    });

    const { data } = await axios.post('http://localhost:9000/', { message });

    dispatch({
      type: 'ADD_MESSAGES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ADD_MESSAGES_FAIL',
      payload: error.response?.data
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateMessage =
  (message, messageId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'UPDATE_MESSAGES_START',
      });

      const { data } = await axios.patch(
        `http://localhost:9000/?messageId=${messageId}`,
        {
          message,
        }
      );

      dispatch({
        type: 'UPDATE_MESSAGES_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_MESSAGES_FAIL',
        payload: error.response?.data
          ? error.response.data.message
          : error.message,
      });
    }
  };
