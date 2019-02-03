let controller = require('../../controller/accommodation');

let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).accommodation;

const {
    check,
    validationResult
} = require('express-validator/check');
const {
    sanitize
} = require('express-validator/filter');

const validator = [
    check('name')
        .isLength({ min: 1 })
        .withMessage(msg.blank_accommodation_name)
        .escape(),
    check('vacancies')
        .isLength({ min: 1 })
        .withMessage(msg.blank_accommodation_vacancies)
        .escape(),
    check('contact')
        .isLength({ min: 1 })
        .withMessage(msg.blank_accommodation_contact)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/accommodation', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let accommodation = await controller.create(req.body);

            if (accommodation) {
                res.status(201).json({
                    code: 201,
                    accommodation
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/accommodation', async (req, res) => {
        let accommodations = await controller.get();
        if (accommodations) {
            res.status(200).json({
                code: 200,
                accommodations
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/accommodation/:id', async (req, res) => {
        let accommodation = await controller.get(req.params.id);
        if (accommodation) {
            res.status(200).json({
                code: 200,
                accommodation
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/accommodation', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let accommodation = await controller.update(_id, data);

        if (accommodation) {
            res.status(200).json({
                code: 200,
                accommodation
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/accommodation/:id', authenticate(), async (req, res) => {
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