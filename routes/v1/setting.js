let controller = require('../../controller/setting');
let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).setting;

const {
    check,
    validationResult
} = require('express-validator/check');
const {
    sanitize
} = require('express-validator/filter');

const validator = [
    check('year')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_year)
        .escape(),
    check('img')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_img)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/setting', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let setting = await controller.create(req.body);

            if (setting) {
                res.status(201).json({
                    code: 201,
                    setting
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/setting', async (req, res) => {
        let settings = await controller.get();
        if (settings) {
            res.status(200).json({
                code: 200,
                settings
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/setting/:id', async (req, res) => {
        let setting = await controller.get(req.params.id);
        if (setting) {
            res.status(200).json({
                code: 200,
                setting
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/setting', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let setting = await controller.update(_id, data);

        if (setting) {
            res.status(200).json({
                code: 200,
                setting
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/setting/:id', authenticate(), async (req, res) => {
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