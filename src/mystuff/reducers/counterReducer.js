const initialState = {
  theCount: 0
};

let counterReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'todos/INCREMENT': {
      return {
        ...state, theCount: action.payload
      }
    }
    default: {
        return state;
    }

  }
}

export default counterReducer;
