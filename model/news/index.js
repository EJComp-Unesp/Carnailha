let News = require('./schema').News;

module.exports.create = async (data) => {
    let news = new News(data);
    return await news.save();
}   

module.exports.get = async (config = {}) => {
    return await News.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await News.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let news = await News.findById(id).exec();
    data.updated_at = new Date().getTime();
    news.set(data);
    return await news.save();
}

module.exports.delete = async (id) => {
    return !! await News.findByIdAndDelete(id).exec();
}