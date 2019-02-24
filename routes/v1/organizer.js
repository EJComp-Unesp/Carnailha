let controller = require('../../controller/organizer');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).organizer;

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
    app.post('/organizer', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let organizer = await controller.create(req.body);
            if (organizer) {
                res.status(201).json({
                    code: 201,
                    organizer
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/organizer', async (req, res) => {
        let organizers = await controller.get();
        if (organizers) {
            res.status(200).json({
                code: 200,
                organizers
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/organizer/:id', async (req, res) => {
        let organizer = await controller.get(req.params.id);
        if (organizer) {
            res.status(200).json({
                code: 200,
                organizer
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/organizer', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let { _id, ...data } = req.body;
            let organizer = await controller.update(_id, data);

            if (organizer) {
                res.status(200).json({
                    code: 200,
                    organizer
                });
            } else {
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/organizer/:id', authenticate(), async (req, res) => {
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