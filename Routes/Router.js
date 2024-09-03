const express = require('express');
const router = express.Router();

const { createClass, getAllClass, getClass, getClassTeacher, updateClass, deleteClass } = require('../Controller/ClassController');
const { adminLogin } = require('../Controller/AdminController');
const verifyToken = require('../Middleware/authMiddleware');

// class routers
router.post('/create-class', verifyToken, createClass);
router.post('/classes', verifyToken, getAllClass);
router.post('/class', verifyToken, getClass);
router.post('/class-teacher', verifyToken, getClassTeacher);
router.patch('/update-class/:postId', verifyToken, updateClass);
router.delete('/delete-class/:postId', verifyToken, deleteClass);

// admin routes
router.post('/admin-login', adminLogin);


module.exports = router;