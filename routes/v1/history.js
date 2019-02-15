let controller = require('../../controller/history');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).history;

const { check, body, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const validator = [
    check('content')
        .isLength({ min: 1 })
        .withMessage(msg.blank_history_content)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/history', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let history = await controller.create(req.body);
            if (history) {
                res.status(201).json({
                    code: 201,
                    history
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/history', async (req, res) => {
        let histories = await controller.get();
        if (histories) {
            res.status(200).json({
                code: 200,
                histories
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/history/:id', async (req, res) => {
        let history = await controller.get(req.params.id);
        if (history) {
            res.status(200).json({
                code: 200,
                history
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/history', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        }
        else {
            let { _id, ...data } = req.body;
            let history = await controller.update(_id, data);

            if (history) {
                res.status(200).json({
                    code: 200,
                    history
                });
            } else {
                res.status(500).json({
                    code: 500
                })
            }
        }
    })

    app.delete('/history/:id', authenticate(), async (req, res) => {
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