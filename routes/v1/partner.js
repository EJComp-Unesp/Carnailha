let controller = require('../../controller/partner');
let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).partner;

const {
    check,
    validationResult
} = require('express-validator/check');
const {
    sanitize
} = require('express-validator/filter');

const validator = [
    check('name')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_partner_name)
        .escape(),
    check('img')
        .isLength({
            min: 1
        })
        .withMessage(msg.no_partner_img)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/partner', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let partner = await controller.create(req.body);

            if (partner) {
                res.status(201).json({
                    code: 201,
                    partner
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/partner', async (req, res) => {
        let partners = await controller.get();
        if (partners) {
            res.status(200).json({
                code: 200,
                partners
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/partner/:id', async (req, res) => {
        let partner = await controller.get(req.params.id);
        if (partner) {
            res.status(200).json({
                code: 200,
                partner
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/partner', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let partner = await controller.update(_id, data);

        if (partner) {
            res.status(200).json({
                code: 200,
                partner
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/partner/:id', authenticate(), async (req, res) => {
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