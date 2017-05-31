/* User controller */

module.exports = {
  listAll: (req, res) => {
    res.json([
      {
        name: 'tom'
      },
      {
        name: 'marc'
      },
      {
        name: 'jean'
      }
    ]);
  },

  getInfosById: (req, res) => {
    res.json({
      name: '',
      description: ''
    });
  },

  getOwnInfos: (req, res) => {
    res.json({
      name: '',
      description: ''
    });
  },

  getOwnEvents: (req, res) => {
    res.json([
      {
        name: '',
        description: ''
      }
    ]);
  },

  getOwnHistory: (req, res) => {
    res.json([
      {
        name: '',
        description: ''
      }
    ]);
  }
};
