import { MongoClient } from 'mongodb';
import { Repository } from 'mongodb-typescript';
import User from './model/user';
import Task from './model/task';

export default class Database {
    private static instance: Database;
    private url: string = process.env.MONGO_URI || 'your_connection_string';
    private mongoClient: MongoClient;
    private userDB: Repository<User>;
    private taskDB: Repository<Task>;

    constructor() {
        this.mongoClient = new MongoClient(this.url);
        this.userDB = new Repository<User>(User, this.mongoClient, 'users');
        this.taskDB = new Repository<Task>(Task, this.mongoClient, 'tasks'); // corrected 'Tasks' to 'tasks'
       
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public getUser() {
        return this.userDB;
    }

    public getTaskDB() {
        return this.taskDB;
}
}