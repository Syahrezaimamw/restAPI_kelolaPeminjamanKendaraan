import express from 'express'
import { getAllAdmin,getAllAdminById, updateAdmin, deleteAdmin, registerAdmin, loginAdmin, logoutAdmin } from '../controller/AdminController.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { refreshToken } from '../controller/refreshToken.js'
const RouterAdmin=express.Router()

RouterAdmin.get('/', getAllAdmin)
RouterAdmin.get('/find/:id',getAllAdminById)
RouterAdmin.get('/token',refreshToken)

RouterAdmin.post('/register',registerAdmin)
RouterAdmin.post('/login',loginAdmin)

RouterAdmin.put('/update/:id',updateAdmin)

RouterAdmin.delete('/delete/:id',deleteAdmin)
RouterAdmin.delete('/logout',logoutAdmin)

export default RouterAdmin