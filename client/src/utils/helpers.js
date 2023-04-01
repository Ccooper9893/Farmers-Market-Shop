// function idbPromise(marketName, method, object) {
//     return new Promise((resolve, reject) => {
//         const req = window.indexedDB.open('shop-shop', 1);

//         req.onupgradeneeded = function(e) {
//             const database = e.target.result;
//             database.createObjectMarket('products', {keyPath: '_id'});
//             database.createObjectMarket('categories', {keyPath: '_id'});
//             database.createObjectMarket('cart', {keyPath: '_id'});
//         };
//          req.onerror = function(e) {
//             console.log('Uh oh. There was an error');
//             reject(e);
//          };

//          req.onsuccess = function(e) {
//             const database = e.target.result;
//             const tx = database.transaction(marketName, 'readwrite');
//             const market = tx.objectMarket(marketName);
        
//         database.onerror = function(e) {
//             console.log('error', e);
//             reject(e);
//         };

//         switch (method) {
//             case 'put':
//                 market.put(object);
//                 resolve(object);
//                 break;
//             case 'get':
//                 const getReq = market.get(object._id);
//                 getReq.onsuccess = function() {
//                     resolve(getReq.result);
//                 };
//                 break;
//             case 'get':
//                 const getAllReq = market.getAll();
//                 getAllReq.onsuccess = function() {
//                     resolve(getAllReq.result);
//                 };
//                 break;
//             case 'delete':
//                 market.delete(object._id);
//                 break;
//             default:
//                 console.log('No valid method');
//                 break;
//         }

//         tx.oncomplete = function() {
//             database.close();
//         };

//     };
//     });
// };