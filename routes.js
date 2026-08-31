const path = require('path')

// factory function - called with the app already passed
module.exports = app => {
    return (url, file) => {
        app.get(url, (req,res) => {
            res.sendFile(path.join(__dirname, 'views', file + '.html'))
        })
    }
}