const multer = require("multer")


let storage = multer.memoryStorage({

})

const filter = (req, file, cb) => {
      if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"));
    }
}


let upload = multer({
  storage: storage,
  fileFilter: filter,
});

let uploadImage = upload.single("avatar");


module.exports = {uploadImage}