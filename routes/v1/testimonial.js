let controller = require('../../controller/testimonial');
let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).testimonial;

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
        .withMessage(msg.blank_testimonial_name)
        .escape(),
    check('testimonial')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_testimonial_testimonial)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/testimonial', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let testimonial = await controller.create(req.body);

            if (testimonial) {
                res.status(201).json({
                    code: 201,
                    testimonial
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/testimonial', async (req, res) => {
        let testimonials = await controller.get();
        if (testimonials) {
            res.status(200).json({
                code: 200,
                testimonials
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/testimonial/:id', async (req, res) => {
        let testimonial = await controller.get(req.params.id);
        if (testimonial) {
            res.status(200).json({
                code: 200,
                testimonial
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/testimonial', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let testimonial = await controller.update(_id, data);

        if (testimonial) {
            res.status(200).json({
                code: 200,
                testimonial
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/testimonial/:id', authenticate(), async (req, res) => {
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