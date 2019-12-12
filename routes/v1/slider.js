let controller = require('../../controller/slider');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).slider;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const validator = [
    check('active_amount')
        .isInt({min: 1, gt: 0})
        .withMessage(msg.invalid_active_amount)
        .escape(),
    check('slides')
        .isArray()
        .withMessage(msg.array_slides),
    body('slides.*.img')
        .isLength({ min: 1 })
        .withMessage(msg.blank_slide_img)
]

module.exports = (app, authenticate) => {
    app.post('/slider', validator, authenticate(),async (req, res) => {
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else{
            let slider = await controller.create(req.body);
            if(slider){
                res.status(201).json({
                    code: 201,
                    slider
                });
            }else{
                res.status(500).json({
                    code: 500
                });
            }        
        }
    })

    app.get('/slider', async (req, res) => {
        let sliders = await controller.get();
        if (sliders) {
            res.status(200).json({
                code: 200,
                sliders
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/slider/:id', async (req, res) => {
        let slider = await controller.get(req.params.id);
        if (slider) {
            res.status(200).json({
                code: 200,
                slider
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/slider', validator, authenticate(), async (req, res) => {        
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let {_id, ...data} = req.body;
            let slider = await controller.update(_id, data);
            
            if(slider){
                res.status(200).json({
                    code:200,
                    slider
                });
            }else{
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/slider/:id', authenticate(), async (req, res) => {
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