let controller = require('../../controller/gallery');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).gallery;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const validator = [
    check('gallery_name')
        .isLength({ min: 1 })
        .withMessage(msg.blank_gallery_name)
        .escape(),
    check('images')
        .isArray()
        .withMessage(msg.array_gallery),
    body('images.*.name')
        .isLength({ min: 1 })
        .withMessage(msg.blank_gallery_image_name)
        .escape(),
    body('images.*.img')
        .isLength({ min: 1 })
        .withMessage(msg.blank_gallery_image_img)
        .escape()
]

module.exports = (app, authenticate) => {
    app.post('/gallery', validator, authenticate(),async (req, res) => {
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else{
            let gallery = await controller.create(req.body);
            if(gallery){
                res.status(201).json({
                    code: 201,
                    gallery
                });
            }else{
                res.status(500).json({
                    code: 500
                });
            }        
        }
    })

    app.get('/gallery', async (req, res) => {
        let galleries = await controller.get();
        if (galleries) {
            res.status(200).json({
                code: 200,
                galleries
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/gallery/:id', async (req, res) => {
        let gallery = await controller.get(req.params.id);
        if (gallery) {
            res.status(200).json({
                code: 200,
                gallery
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/gallery', validator, authenticate(), async (req, res) => {        
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let {_id, ...data} = req.body;
            let gallery = await controller.update(_id, data);
            
            if(gallery){
                res.status(200).json({
                    code:200,
                    gallery
                });
            }else{
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/gallery/:id', authenticate(), async (req, res) => {
        let result = await controller.delete(req.params.id);
        if (result) {
            res.status(200).json({
                code: 200
            })
        } else {
            res.status(500).json({
                code: 200
            })
        }
    })
}