let mongoose = require('mongoose');
mongoose.connect(
    // 'mongodb://api_user:dvora1@ds249583.mlab.com:49583/dvora',
    'mongodb://carnailha_admin:carna123@ds151943.mlab.com:51943/carnailha',
    {useNewUrlParser: true}
);

module.exports = mongoose;
