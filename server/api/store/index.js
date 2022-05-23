const store = require('electron-store');

const schema = require('./schema');

function Store() {
  const storeState = new store({ schema });

  function get(key) {
    try {
      const fetchValue = storeState.get(key) || null;

      return fetchValue;
    } catch (error) {
      console.error(`Error when geting the data : ${error}`);
      return false;
    }
  }

  function set(key, value) {
    try {
      storeState.set(key, value);

      return true;
    } catch (error) {
      console.error(`Error when setting the data : ${error}`);
      return false;
    }
  }

  function del(key = '') {
    if (!key) {
      return false;
    }

    try {
      storeState.delete(key);

      return true;
    } catch (error) {
      console.error(`Error when deleting the data : ${error}`);
      return false;
    }
  }

  return {
    get,
    set,
    del,
  };
}

module.exports = Store;
