let Drink = require('./schema').Drink;

module.exports.create = async (data) => {
    let stage = new Drink(data);
    return await stage.save();
}   

module.exports.get = async (config = {}) => {
    return await Drink.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Drink.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let stage = await Drink.findById(id).exec();
    data.updated_at = new Date().getTime();
    stage.set(data);
    return await stage.save();
}

module.exports.delete = async (id) => {
    return !! await Drink.findByIdAndDelete(id).exec();
}