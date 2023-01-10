import DBService from './db.js';
import * as userModel from '../model/user_model.js';
class UserService {
    userDBName = 'user';
    instance = null;
    constructor() {
        this.dbService =  DBService.DBServiceInstance;
    }
    static get UserServiceInstance() {
        if(this.instance==null) {
            this.instance = new UserService();
        }
        return this.instance;
    }
    async findAllUsers() {
            try {
                await this.dbService.connect(this.userDBName);
                const result = await this.dbService.find(userModel.default);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
    }

    async createUser({ name, phonenumber, address, photo, sex }) {
            try {
                await this.dbService.connect(this.userDBName);
                const teacher = new userModel.default({ name, phonenumber, address, photo, sex });
                const result = await this.dbService.save(teacher);
                return Promise.resolve(result);
            } catch (error) {
                return Promise.reject(error);
            } finally {
                this.dbService.disConnect();
            }
    }
}
export default UserService;