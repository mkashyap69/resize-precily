export const getMessagesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MESSAGES_START':
      return { ...state, loading: true };
    case 'GET_MESSAGES_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'GET_MESSAGES_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGES_START':
      return { ...state, loading: true };
    case 'ADD_MESSAGES_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'ADD_MESSAGES_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGES_START':
      return { ...state, loading: true };
    case 'UPDATE_MESSAGES_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'UPDATE_MESSAGES_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
