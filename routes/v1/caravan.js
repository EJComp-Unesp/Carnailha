let controller = require('../../controller/caravan');

let {MESSAGE_FILE} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).caravan;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const validator = [
    check('state')
        .isLength({ min:1 })
        .withMessage(msg.blank_state)
        .escape(),
    check('cities')
        .isArray()
        .withMessage(msg.array_cities),
    body('cities.*.city')
        .isLength({ min:1 })
        .withMessage(msg.blank_city)
        .escape(),
    body('cities.*.promoters')
        .isArray()
        .withMessage(msg.array_promoters),
    body('cities.*.promoters.*')
        .escape(),
    body('cities.*.promoters.*.name')
        .isLength({ min:1 })
        .withMessage(msg.blank_promoter_name)
]
module.exports = (app, authenticate) => {
    app.post('/caravan', validator, authenticate(),async (req, res) => {
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else{
            let caravan = await controller.create(req.body);
            if(caravan){
                res.status(201).json({
                    code: 201,
                    caravan
                });
            }else{
                res.status(500).json({
                    code: 500
                });
            }        
        }
    })

    app.get('/caravan', async (req, res) => {
        let caravans = await controller.get();
        if(caravans){
            res.status(200).json({
                code:200,
                caravans
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/caravan/:id', async (req, res) => {
        let caravan = await controller.get(req.params.id);
        if(caravan){
            res.status(200).json({
                code:200,
                caravan
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/caravan', validator, authenticate(), async (req, res) => {        
        let errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let {_id, ...data} = req.body;
            let caravan = await controller.update(_id, data);
            
            if(caravan){
                res.status(200).json({
                    code:200,
                    caravan
                });
            }else{
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/caravan/:id', authenticate(), async (req, res) => {
        let result = await controller.delete(req.params.id);
        if(result){
            res.status(200).json({
                code:200
            })
        }else{
            res.status(500).json({
                code:200
            })
        }
    })
}