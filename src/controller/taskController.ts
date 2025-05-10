import express, { Request } from "express";
import Task from "../model/task";
import Authenticate from "../middleware/authentication";

// Extend the Request interface to include userId
interface AuthenticatedRequest extends Request {
    userId?: string;
}


const router = express.Router();
router.get("/", (req, res) => {
    res.send("Task API is working!");
});


router.get("/todo", Authenticate, (req, res, next) => {
   if (!(req as any).userId) {
        res.status(401).json({ message: "Unauthorized" });
    } else {
        res.status(200).json({ message: "User is authenticated", userId: (req as any).userId });
    }
});

export default router;