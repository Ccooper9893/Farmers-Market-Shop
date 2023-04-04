// export function pluralize(name, count) {
//     if (count === 1) {
//       return name;
//     }
//     return name + 's';
//   }
  
//   export function idbPromise(storeName, method, object) {
//     console.log(storeName);
//     return new Promise((resolve, reject) => {
//       const req = window.indexedDB.open('shop-shop', 1);
//       //let database, tx, store;
//       req.onupgradeneeded = function(e) {
//         const database = req.result;
//         database.createObjectStore('products', {keyPath: '_id'});
//         database.createObjectStore('categories', {keyPath: '_id'});
//         database.createObjectStore('cart', {keyPath: '_id'});
//       };
  
//       req.onerror = function(e) {
//         console.log('Uh oh. There was an error');
//         reject(e);
//       };
  
//       req.onsuccess = function(e) {
//         const database = req.result;
//         const tx = database.transaction(storeName, 'readwrite');
//         const store = tx.objectStore(storeName);
  
//         database.onerror = function(e) {
//           console.log('error', e);
//           reject(e);
//         };
  
//         switch (method) {
//           case 'put':
//             store.put(object);
//             resolve(object);
//             break;
//           case 'get':
//             if (object) {
//               const getReq = store.get(object._id);
//               getReq.onsuccess = function() {
//                 resolve(getReq.result);
//               };
//             } else {
//               const getAllReq = store.getAll();
//               getAllReq.onsuccess = function() {
//                 resolve(getAllReq.result);
//               };
//             }
//             break;
//           case 'delete':
//             store.delete(object._id);
//             break;
//           default:
//             console.log('No valid method');
//             break;
//         }
  
//         tx.oncomplete = function() {
//           database.close();
//         };
//       };
  
//     });
//   }
  