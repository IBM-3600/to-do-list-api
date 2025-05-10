import { NextFunction, Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

const Authenticate = (req:any, res:any, next:any) => {
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const user = jwt.verify(token, JWT_SECRET); 
        (req as any).userId = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
export default Authenticate;

