let controller = require('../../controller/news');
let {
    MESSAGE_FILE
} = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).news;

const {
    check,
    validationResult
} = require('express-validator/check');
const {
    sanitize
} = require('express-validator/filter');

const validator = [
    check('heading')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_news_heading)
        .escape(),
    check('text')
        .isLength({
            min: 1
        })
        .withMessage(msg.blank_news_text)
        .escape(),
]

module.exports = (app, authenticate) => {
    app.post('/news', validator, authenticate(), async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(406).json({
                code: 406,
                errors: errors.mapped()
            });
        } else {
            let news = await controller.create(req.body);

            if (news) {
                res.status(201).json({
                    code: 201,
                    news
                });
            } else {
                res.status(500).json({
                    code: 500
                });
            }
        }
    })

    app.get('/news', async (req, res) => {
        let newsa = await controller.get();
        if (newsa) {
            res.status(200).json({
                code: 200,
                newsa
            });
        } else {
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/news/:id', async (req, res) => {
        let news = await controller.get(req.params.id);
        if (news) {
            res.status(200).json({
                code: 200,
                news
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/news', authenticate(), async (req, res) => {
        let {
            _id,
            ...data
        } = req.body;
        let news = await controller.update(_id, data);

        if (news) {
            res.status(200).json({
                code: 200,
                news
            });
        } else {
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/news/:id', authenticate(), async (req, res) => {
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