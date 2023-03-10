const express = require('express');
const router = express.Router();
const addStudent= require('./addStudents');
const listStudent = require('./listStudents');
const updateStudent = require('./updateStudent');
const deleteStudent = require('./deleteStudent');

router.use('/add_student',addStudent);
router.use('/list_student',listStudent);
router.use('/update_student',updateStudent);
router.use('/delete_student',deleteStudent);
module.exports=router;