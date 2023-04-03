const { Storage } = require('@google-cloud/storage');

//Configuring Google Cloud Storage
const gc = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'farmers-market-381904',
});

//Grabbing farmer's market bucket from bloud storage
const filesBucket = gc.bucket('farmers-market-images');

function uploadFile(file) {

      //Create a promise for error handling
    return new Promise((resolve, reject) => {

      if(!file.mimetype.startsWith("image")) {
        reject('File is not an image type')
      };
        //Unique filename
      const fileName = Date.now() + '-' + file.originalname;
        //References the bucket
      const blob = filesBucket.file(fileName);
        //Start streaming the file to the bucket (like transferring water from one cup to another)
      const blobStream = blob.createWriteStream({
        resumable: false,
      });
  
        //Listen for write stream finish and return imageUrl (Once finished pouring)
      blobStream.on('finish', () => {
        const imageUrl = `https://storage.googleapis.com/${filesBucket.name}/${blob.name}`;
        resolve(imageUrl);
      });
        //If error reject
      blobStream.on('error', (err) => {
        reject(err);
      });
        //Once stream if done, clear node file buffer memory and disconnect stream
      blobStream.end(file.buffer);
    });
  }

module.exports = uploadFile;


