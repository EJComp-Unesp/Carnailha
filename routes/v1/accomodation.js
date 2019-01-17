let controller = require('../../controller/accomodation');

let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).accomodation;
console.log(msg.blank_name);

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
    .withMessage(msg.blank_name)
    .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/accomodation', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let accomodation = await controller.create(req.body);

            if (accomodation) {
                res.status(201).json({
                    code: 201,
                    accomodation
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/accomodation', async (req, res) => {
        let accomodations = await controller.get();
        if (accomodations) {
            res.status(200).json({
                code: 200,
                accomodations
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/accomodation/:id', async (req, res) => {
        let accomodation = await controller.get(req.params.id);
        if (accomodation) {
            res.status(200).json({
                code: 200,
                accomodation
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/accomodation', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let accomodation = await controller.update(_id, data);

        if (accomodation) {
            res.status(200).json({
                code: 200,
                accomodation
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/accomodation/:id', authenticate(), async (req, res) => {
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