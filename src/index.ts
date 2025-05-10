import express from 'express';
import taskController from './controller/taskController';
import userController from './controller/userController';

const app = express();
const PORT = process.env.PORT || 3000;


app.use("/tasks", taskController);
app.use("/users", userController);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`To-Do Server is running on http://localhost:${PORT}`);
});