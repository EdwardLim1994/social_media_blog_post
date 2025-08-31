
export default class UserNotFoundException extends Error {
    private readonly code = 404;

    constructor(message: string) {
        super(message);
        this.name = 'UserNotFoundException';
    }
}