const path = require('path');
const multer = require('multer');
const fs = require('fs');
var _ = require('lodash');
//Defining multer configs
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

var limits = {
    files: 1, // allow only 1 file per request
    fileSize: 3 * 1024 * 1024, // 3 MB (max file size)
};

var fileFilter = function (req, file, cb) {
    // supported image file mimetypes
    var allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'];

    if (_.includes(allowedMimes, file.mimetype)) {
        // allow supported image files
        cb(null, true);
    } else {
        // throw error for invalid files
        err = new Error(msg.mimetype);
        err.code = 'MIME_TYPE';
        cb(err);
    }
};
var upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
}).single('file');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).upload;

module.exports = (app, authenticate) => {
    app.post('/upload', async (req, res) => {
        upload(req, res, function (err) {
            if (err) {
                let errorMessage;
                switch (err.code) {
                    case 'LIMIT_FILE_SIZE':
                        errorMessage = msg.size;
                        break;
                    case 'LIMIT_FILE_COUNT':
                        errorMessage = msg.count;
                        break;
                    case 'MIME_TYPE':
                        errorMessage = msg.mimetype;
                        break;
                    default:
                        break;
                }
                res.status(406).json({
                    code: 406,
                    error: errorMessage,
                });
            } else {
                if (req.file) {
                    res.status(201).json({
                        code: 201,
                        img: req.file.path
                    });
                } else {
                    res.status(500).json({
                        code: 500
                    });
                }
            }
        })
    })

    app.delete('/upload', async (req, res) => {
        let result = fs.unlink('./' + req.body.file_path, function (err) {
            if (!err) {
                res.status(200).json({
                    code: 200,
                    msg: msg.deleted_success
                })
            } else {
                res.status(500).json({
                    code: 200,
                    error: msg.deleted_failure
                })
            }
        });
    })
}