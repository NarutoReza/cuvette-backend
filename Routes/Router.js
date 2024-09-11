const express = require('express');
const router = express.Router();

const { createClass, getAllClass, getClass, getClassTeacher, updateClass, deleteClass } = require('../Controller/ClassController');
const { adminLogin } = require('../Controller/AdminController');
const { addTeacher, getAllTeachers, getTeacherByClass, updateTeacher, deleteTeacher } = require('../Controller/TeacherController');
const { addStudent, getAllStudentByClass, getAStudentByClass, getAllStudents, updateAStudent, deleteAStudent } = require('../Controller/StudentsController');
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

// teacher routes
router.post('/add-teacher', verifyToken, addTeacher);
router.post('/teachers', verifyToken, getAllTeachers);
router.post('/teacher-class', verifyToken, getTeacherByClass);
router.patch('/update-teacher/:postId', verifyToken, updateTeacher);
router.delete('/delete-teacher/:postId', verifyToken, deleteTeacher);


// student routes
router.post('/add-student', verifyToken, addStudent);
router.post('/students', verifyToken, getAllStudents);
router.post('/class-students', verifyToken, getAllStudentByClass);
router.post('/class-student', getAStudentByClass);
router.patch('/update-student/:postId', verifyToken, updateAStudent);
router.delete('/delete-student/:postId', verifyToken, deleteAStudent);


module.exports = router;