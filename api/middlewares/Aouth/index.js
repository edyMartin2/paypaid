const middleware = (req, res, next)=>{
    if(!true) return next()
    res.redirect('/')
}

module.exports = middleware;