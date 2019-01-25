let controller = require('../../controller/drink');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).drink;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const validator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage(msg.blank_name)
        .escape(),
    check('icon')
        .isLength({ min: 1 })
        .withMessage(msg.blank_icon)
        .escape(),
    check('quantity')
        .isInt({ min: 1 })
        .withMessage(msg.min_quantity)
        .escape()
]
module.exports = (app, authenticate) => {
    app.post('/drink', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let drink = await controller.create(req.body);
            if (drink) {
                res.status(201).json({
                    code: 201,
                    drink
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/drink', async (req, res) => {
        let drinks = await controller.get();
        if (drinks) {
            res.status(200).json({
                code: 200,
                drinks
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/drink/:id', async (req, res) => {
        let drink = await controller.get(req.params.id);
        if (drink) {
            res.status(200).json({
                code: 200,
                drink
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/drink', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let { _id, ...data } = req.body;
            let drink = await controller.update(_id, data);

            if (drink) {
                res.status(200).json({
                    code: 200,
                    drink
                });
            } else {
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/drink/:id', authenticate(), async (req, res) => {
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