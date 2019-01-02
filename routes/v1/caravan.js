let controller = require('../../controller/caravan');

module.exports = (app, authenticate) => {
    app.post('/caravan', authenticate(),async (req, res) => {
        let caravan = await controller.create(req.body);
        
        if(caravan){
            res.status(201).json({
                code: 201,
                caravan
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }        
    })

    app.get('/caravan', async (req, res) => {
        let caravans = await controller.get();
        if(caravans){
            res.status(200).json({
                code:200,
                caravans
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/caravan/:id', async (req, res) => {
        let caravan = await controller.get(req.params.id);
        if(caravan){
            res.status(200).json({
                code:200,
                caravan
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/caravan', authenticate(), async (req, res) => {        
        let {_id, ...data} = req.body;
        let caravan = await controller.update(_id, data);
        
        if(caravan){
            res.status(200).json({
                code:200,
                caravan
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/caravan/:id', authenticate(), async (req, res) => {
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