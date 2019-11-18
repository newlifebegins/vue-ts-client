const path = require('path');

module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://vuets-api.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};