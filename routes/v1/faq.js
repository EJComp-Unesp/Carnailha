let controller = require('../../controller/faq');

module.exports = (app, authenticate) => {
    app.post('/faq', authenticate(), async (req, res) => {
        let faq = await controller.create(req.body);
        
        if(faq){
            res.status(201).json({
                code: 201,
                faq
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }        
    })

    app.get('/faq', async (req, res) => {
        let faqs = await controller.get();
        if(faqs){
            res.status(200).json({
                code:200,
                faqs
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/faq/:id', authenticate(), async (req, res) => {
        let faq = await controller.get(req.params.id);
        if(faq){
            res.status(200).json({
                code:200,
                faq
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/faq', authenticate(), async (req, res) => {        
        let {_id, ...data} = req.body;
        let faq = await controller.update(_id, data);
        
        if(faq){
            res.status(200).json({
                code:200,
                faq
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/faq/:id', authenticate(), async (req, res) => {
        let result = await controller.delete(req.params.id);
        if(result){
            res.status(200).json({
                code:200
            })
        }else{
            res.status(500).json({
                code:200
            })
        }
    })
}