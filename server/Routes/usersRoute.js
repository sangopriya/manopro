const router = require ('express').Router()
const {userAuthentication} = require ('../Controllers/userController')
//const auth = require ('../Middleware/auth')

//authentication routes
router.post('/signup', userAuthentication.register)
router.post('/signin', userAuthentication.login)


module.exports = router
