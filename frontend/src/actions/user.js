const login = user => {
  return {
    type: 'USER_LOGGED_IN',
    user
  };
};

const logout = () => {
  return {
    type: 'USER_LOGOUT'
  };
};

const updateInfos = user => {
  return {
    type: 'USER_UPDATE_INFOS',
    user
  };
};

const getOwnHistory = users => {
  return {
    type: 'USER_HISTORY',
    history: users
  };
};

export default {
  login,
  logout,
  updateInfos,
  getOwnHistory
};
