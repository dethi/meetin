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

export default {
  login,
  logout
};
