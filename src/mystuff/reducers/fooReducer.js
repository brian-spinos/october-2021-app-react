const initialState = {
  theFoo: 'abc'
};

let fooReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/add': {
      return {
        ...state, theFoo: action.payload
      }
    }
    default: {
        return state;
    }

  }
}

export default fooReducer;
