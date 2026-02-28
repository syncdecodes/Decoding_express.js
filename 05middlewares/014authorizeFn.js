const authorize = (req, res, next)=>{
    const {user} = req.query;
    if (user === 'john'){
        req.userdata = {name: 'john', id: 9}
        return next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize
