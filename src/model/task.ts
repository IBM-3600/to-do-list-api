
export default class Task {
    private title: string;
    private description: string;
    private completed: boolean;
    private dueDate: Date;

    constructor(title: string, description: string, completed: boolean, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.dueDate = dueDate;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public setCompleted(completed: boolean): void {
        this.completed = completed;
    }
}