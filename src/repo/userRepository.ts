import Database from "../db";
import User from "../model/user";
import IRepository from "./iRepository";
export default class UserRepository implements IRepository<User> {
    private userDB: any;

    constructor(){
        this.userDB = Database.getInstance().getUser();
    }

    async create(item: User): Promise<User> {
        const createdUser = await this.userDB.insert(item);
        return createdUser;
    }
    async findById(id: string): Promise<User | null> {
        const user = await this.userDB.find(id);
        return user || null;
    }
    async findAll(): Promise<User[]> {
        const users = await this.userDB.findAll();
        return users;
    }
    async update(id: string, item: User): Promise<User | null> {
        const updatedUser = await this.userDB.update(id, item);
        return updatedUser || null;
    }
    async delete(id: string): Promise<User | null> {
        const deletedUser = await this.userDB.delete(id);
        return deletedUser || null;
    }
}
