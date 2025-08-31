import {Elysia} from "elysia"
import UserController from "./user.controller.ts";
import UserService from "./user.service.ts";

const userService = new UserService()
const userController = new UserController(userService);

export const useRouter = new Elysia()
    .post("/", userController.createUser);