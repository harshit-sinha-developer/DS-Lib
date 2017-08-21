export const Dictionary = (function () {
  let _map = null;

  class _Dictionary {
    constructor() {
      _map = new Map();
    }

    get size() {
      return _map.size;  
    }

    set(key, value) {
      _map.set(key, value);
    }

    get(key) {
      return _map.get(key);
    }

    keys() {
      let keys = [];
      _map.forEach((value, key) => {
        keys.push(key);
      });
      return keys;
    }

    values() {
      let values = [];
      _map.forEach((value, key) => {
        values.push(value);
      });
      return values;
    }

    has(key) {
      return _map.has(key);
    }

    map(callback) {
      if(callback.length == 1) {
        _map.forEach((value, key) => {
          callback(value);
        });
      } else {
        _map.forEach((value, key) => {
          callback(key, value);
        })
      }
    }

    entries() {
      let entries = [];
      _map.forEach((value, key) => {
        entries.push([key, value]);
      })
      return entries;
    }

    delete(key) {
      _map.delete(key);
    }

    clear() {
      _map.clear();
    }

    isEmpty() {
      return _map.size === 0;
    }
  }
  return _Dictionary;
})();