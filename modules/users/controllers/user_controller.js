import UserService from "../services/user_service.js";
class UserController {
    instance = null;
    constructor() {
        this.userService = UserService.UserServiceInstance;
    }
    static get UserControllerInstance() {
        if(this.instance==null) {
            this.instance = new UserController();
        }
        return this.instance;
    }
    async findAllUsers() {
            try {
                const result = await this.userService.findAllUsers();
                return Promise.resolve(result);
            } catch (error) {
                return Promise.reject(error);
            }
    }

    async createUser({ name, phonenumber, address, photo, sex }) {
            try {
                const result = await this.userService.createUser({ name, phonenumber, address, photo, sex });
                return Promise.resolve(result);
            } catch (error) {
                return Promise.reject(error);
            }
    }
}
export default UserController;