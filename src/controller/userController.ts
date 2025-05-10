import express from 'express';
import User from '../model/user';
import UserRepo from '../repo/userRepository';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('User api is running');
});

router.post('/', async (req, res) => {

    res.send('User added');
});

export default router;