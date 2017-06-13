const initialState = {
  appReady: false,
  swReady: false
};

const ready = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_READY':
      return { ...state, appReady: true };
    case 'APP_SW_READY':
      return { ...state, swReady: true };
    default:
      return state;
  }
};

export default ready;
