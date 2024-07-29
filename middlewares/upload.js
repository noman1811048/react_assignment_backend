const multer = require('multer');
const path = require('path');

// Configure storage settings for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

// Filter for allowing only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); 
  } else {
    cb(new Error('Only images are allowed!'), false); 
  }
};

// Create multer instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
