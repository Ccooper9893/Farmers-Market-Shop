const request = window.indexedDB.open('shop-shop', 1);
let db, tx, store;

export const idbPromise = async (storeName, method, object) => {
  return new Promise((resolve, reject) => {
    // open a database called 'shop-shop' with version 1 and create an object store called 'cart' with '_id' as the key path
    const request = window.indexedDB.open('shop-shop', 1);
    console.log(storeName, method, object);
    let db, tx, store;
    request.onupgradeneeded = function() {
      const db = request.result;
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    request.onerror = function() {
      console.log('error');
    };

    request.onsuccess = function() {
      db = request.result;
      tx = db.transaction(storeName, 'readwrite');
      store = tx.objectStore(storeName);
      console.log(storeName);

      db.onerror = function(e) {
        console.log('error', e);
      };

        
      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

    tx.oncomplete = function() {
      db.close();
    };

    };


  });
};

