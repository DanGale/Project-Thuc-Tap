const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'text',
      id: 'have_own_store',
      label: 'Have own store',
      default: 'Are you the store owner?',
    },
    {
      type: 'text',
      id: 'login_here',
      label: 'Login here',
      default: 'Login here',
    },
    {
      type: 'url',
      id: 'login_here_link',
      label: 'Link',
    },
  ],
};

module.exports = { schema };
