const ready = (state = false, action) => {
  switch (action.type) {
    case 'APP_READY':
      return true;
    default:
      return state;
  }
};

export default ready;
