import Database from '../db';
import Task from '../model/task';

import IRepository from './iRepository';

export default class TaskRepository implements IRepository<Task> {
    private taskDB: any; // Use the correct type for your taskDB

    constructor(){
        this.taskDB = Database.getInstance().getTaskDB();
    }
    async create(item: Task): Promise<Task> {
        const result = await this.taskDB.insert(item);
        return result;
    }
    async findById(id: string): Promise<Task | null> {
        const result = await this.taskDB.findOne({ id });
        return result || null;
    }
    async findAll(): Promise<Task[]> {
        const results = await this.taskDB.find({});
        return results;
    }
    async update(id: string, item: Task): Promise<Task | null> {
        const updated = await this.taskDB.update({ id }, item);
        return updated || null;
    }
    async delete(id: string): Promise<Task | null> {
        const deleted = await this.taskDB.remove({ id });
        return deleted || null;
    }
}