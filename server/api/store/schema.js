const schema = {
  navigation: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        label: {
          type: 'string',
        },
        key: {
          type: 'string',
        },
        icon: {
          type: 'string',
        },
        layout: {
          type: 'string',
        },
      },
    },
  },
};

module.exports = schema;
