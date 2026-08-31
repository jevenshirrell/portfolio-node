const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

// routes
const route = require('./routes')(app)

route('/', 'index')
route('/timeline', 'timeline')
route(/.*/, 'error')

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
