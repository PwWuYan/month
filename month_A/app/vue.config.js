module.exports = {
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                let data = require('./mock/data.json')
                res.send({
                    values: data
                })
            })
            app.get('/detailList', (req, res) => {
                let { index, id } = req.query

                let data = require('./mock/data.json')
                let list = data['ranklist' + index].filter(item => item.bookId == id)

                res.send(list)

            })
        }
    }
}