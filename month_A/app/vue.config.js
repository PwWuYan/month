module.exports = {
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                let data = require('./mock/data.json')
                res.send({
                    values: data
                })
            })
        }
    }
}