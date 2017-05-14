export class User {
    constructor(
        firstName: string,
        lastName: string,
        username: string, // this should be the primary key
        dob: string,
        gender: string,
        voterId: string, // we can set this as unique
    ) {}
}