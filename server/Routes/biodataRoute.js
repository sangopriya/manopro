const router = require ('express').Router();
const {createData,readData,updateData,deleteData} = require('../Controllers/biodataController')

//crud routers
router.post('/store',createData.store)
router.get('/read',readData.read)
router.put('/update/:id',updateData.update)
router.delete('/delete/:id',deleteData.delete)


module.exports = router