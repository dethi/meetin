const login = user => {
  return {
    type: 'USER_LOGGED_IN',
    user: user
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
    user: user
  };
};

export default {
  login,
  logout,
  updateInfos
};
