const user = (state = null, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return { user: action.user };
    case 'USER_LOGOUT':
      return null;
    case 'USER_UPDATE_INFOS':
      return { ...state, user: action.user };
    case 'USER_HISTORY':
      return { ...state, history: action.history };
    default:
      return state;
  }
};

export default user;
