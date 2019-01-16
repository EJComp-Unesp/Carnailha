let controller = require('../../controller/news');

module.exports = (app, authenticate) => {
    app.post('/news', authenticate(),async (req, res) => {
        let news = await controller.create(req.body);
        
        if(news){
            res.status(201).json({
                code: 201,
                news
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }        
    })

    app.get('/news', async (req, res) => {
        let newsa = await controller.get();
        if(newsa){
            res.status(200).json({
                code:200,
                newsa
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/news/:id', async (req, res) => {
        let news = await controller.get(req.params.id);
        if(news){
            res.status(200).json({
                code:200,
                news
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/news', authenticate(), async (req, res) => {        
        let {_id, ...data} = req.body;
        let news = await controller.update(_id, data);
        
        if(news){
            res.status(200).json({
                code:200,
                news
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/news/:id', authenticate(), async (req, res) => {
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