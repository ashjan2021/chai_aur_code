import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, res, callback) {
        callback(null, "./public/temp");
    },
    filename: function (req, res, callback) {
        callback(null, this.filename.originalname)
    }
});

export const upload = multer({ storage });