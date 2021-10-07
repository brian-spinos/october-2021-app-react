let counterActions = {
  actionA: (payload) => {
    return {'type': 'todos/INCREMENT', payload: payload }
  }
};


export default counterActions;
