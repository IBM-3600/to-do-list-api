

export default class User {
    
    private name: string;
    private age: number;
    private password: string;
    private email: string;

    constructor(name: string, email: string, age: number, password: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getPassword(): string {
        return this.password;
    }
    
    public getEmail(): string {
        return this.email;
    }
}