const multer = require('multer')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname)
    }
});
var upload = multer({storage: storage});
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

module.exports = (app, authenticate) => {
    app.post('/upload', upload.single('file'), async (req, res) => {
        console.log(req.file)
        if(req.file){
            res.status(201).json({
                code: 201,
                img: req.file.path
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }        
    })
    
    app.delete('/upload', async (req, res) => {
        let result = fs.unlink('./' + req.body.file_path, function(err) {
            if(!err){
                console.log('file deleted');
                res.status(200).json({
                    code:200
                })
            }else{
                console.log('Erro: '+ err)
                res.status(500).json({
                    code:200
                })
            }
          });
    })
}