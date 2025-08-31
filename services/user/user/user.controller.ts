import type UserService from "./user.service.ts";

export default class UserController{

    public constructor(private readonly userService: UserService){}

    createUser(){
        this.userService.createUser();
    }
}