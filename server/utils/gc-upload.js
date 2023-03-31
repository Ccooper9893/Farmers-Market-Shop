const { Storage } = require('@google-cloud/storage');

//Configuring Google Cloud Storage
const gc = new Storage({
  keyFilename: './utils/myBucketKey.json',
  projectId: 'farmers-market-381904',
});

//Grabbing farmer's market bucket
const filesBucket = gc.bucket('farmers-market-images');

function uploadFile(file) {
      //Create a promise for error handling
    return new Promise((resolve, reject) => {
        //Unique filename
      const fileName = Date.now() + '-' + file.originalname;
        //References the bucket
      const blob = filesBucket.file(fileName);
        //Create a write stream for the blob of data
      const blobStream = blob.createWriteStream({
        resumable: false,
      });
  
        //Listen for write stream finish and resolve
      blobStream.on('finish', () => {
        const imageUrl = `https://storage.googleapis.com/${filesBucket.name}/${blob.name}`;
        resolve(imageUrl);
      });
        //If error reject
      blobStream.on('error', (err) => {
        reject('Image upload failed.');
      });
        //Once stream if done, clear node file buffer memory and disconnect stream
      blobStream.end(file.buffer);
    });
  }

module.exports = uploadFile;


