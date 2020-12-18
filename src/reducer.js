const dataReducer = (state = { data: [] }, action) => {
  const { type, data } = action;
  switch (type) {
    case 'ADD_DATA':
      return { ...state, data };
    default:
      return state;
  }
};

export default dataReducer;
