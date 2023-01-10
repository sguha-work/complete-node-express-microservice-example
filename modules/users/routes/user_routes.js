import express from 'express';
import UserController from './../controllers/user_controller.js';

const router = express.Router();
const userController = UserController.UserControllerInstance;

router.get('/', async (request, response) => {// read, fetch all teachers data
    console.time();
    let responseObj = {};
    responseObj.status = 200;
    responseObj.data = {};
    responseObj.message = '';
    try {
        const result = await userController.findAllTeachers();
        responseObj.data = result;
        response.send(responseObj);
    } catch (error) {console.error(error);
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    } finally {
        console.log('Time to complete the request->');
        console.timeEnd();
    }
});

router.get('/:teacher_id', (request, response) => {// read, fetch perticuler teacher data
    console.time();
    let responseObj = {};
    responseObj.status = 200;
    responseObj.data = {};
    try {
        response.send(responseObj);
    } catch(error) {
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    } finally {
        console.log('Time to complete the request->');
        console.timeEnd();
    }
});

router.post('/', async (request, response) => {// create, create new teacher
    console.time();
    let responseObj = {};
    responseObj.status = 201;
    responseObj.data = {};
    responseObj.message = '';
    try {
        const result = await userController.createTeacher(request.body);
        responseObj.data = result;
        response.send(responseObj);
    } catch (error) {
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    } finally {
        console.log('Time to complete the request->');
        console.timeEnd();
    }
});

router.patch('/:teacher_id', (request, response) => {// update, update perticuler teacher
    let responseObj = {};
    responseObj.status = 201;
    responseObj.data = {};
    response.send(responseObj);
});

router.delete('/:teacher_id', (request, response) => {// delete, delete perticuler teacher
    let responseObj = {};
    responseObj.status = 203;
    responseObj.data = {};
    response.send(responseObj);
});

export default router;