let controller = require('../../controller/partner');

module.exports = (app, authenticate) => {
    app.post('/partner', authenticate(),async (req, res) => {
        let partner = await controller.create(req.body);
        
        if(partner){
            res.status(201).json({
                code: 201,
                partner
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }        
    })

    app.get('/partner', async (req, res) => {
        let partners = await controller.get();
        if(partners){
            res.status(200).json({
                code:200,
                partners
            });
        }else{
            res.status(500).json({
                code: 500
            });
        }
    })

    app.get('/partner/:id', async (req, res) => {
        let partner = await controller.get(req.params.id);
        if(partner){
            res.status(200).json({
                code:200,
                partner
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.put('/partner', authenticate(), async (req, res) => {        
        let {_id, ...data} = req.body;
        let partner = await controller.update(_id, data);
        
        if(partner){
            res.status(200).json({
                code:200,
                partner
            });
        }else{
            res.status(500).json({
                code: 500
            })
        }
    })

    app.delete('/partner/:id', authenticate(), async (req, res) => {
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