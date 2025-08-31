import UserRepository from "./user.repository.ts";

export default class UserService{

    private constructor(private readonly userRepository: UserRepository){}

    public static init(){
        return new UserService(UserRepository.init());
    }

    createUser() {

    }

    async getUser(){
        return await this.userRepository.getUser();
    }
}