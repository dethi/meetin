const appReady = () => {
  return {
    type: 'APP_READY'
  };
};

const swReady = () => {
  return {
    type: 'APP_SW_READY'
  };
};

export default {
  appReady,
  swReady
};
