let controller = require('../../controller/stage');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).stage;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const validator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage(msg.blank_name)
        .escape(),
    check('img')
        .isLength({ min: 1 })
        .withMessage(msg.blank_img)
]
module.exports = (app, authenticate) => {
    app.post('/stage', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let stage = await controller.create(req.body);
            if (stage) {
                res.status(201).json({
                    code: 201,
                    stage
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/stage', async (req, res) => {
        let stages = await controller.get();
        if (stages) {
            res.status(200).json({
                code: 200,
                stages
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/stage/:id', async (req, res) => {
        let stage = await controller.get(req.params.id);
        if (stage) {
            res.status(200).json({
                code: 200,
                stage
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/stage', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let { _id, ...data } = req.body;
            let stage = await controller.update(_id, data);

            if (stage) {
                res.status(200).json({
                    code: 200,
                    stage
                });
            } else {
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/stage/:id', authenticate(), async (req, res) => {
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