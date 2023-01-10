import mongoose from 'mongoose';
class DBService {
    instance = null;
    constructor() {
        this.db = null;
    }
    static get DBServiceInstance() {
        if(this.instance==null) {
            this.instance = new DBService();
        }
        return this.instance;
    }
    connectionString(dbName = 'test') {
        return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${dbName}`
    }

    async connect(DBName) {
        try {
            await mongoose.connect(this.connectionString(DBName)); // await on a step makes process to wait until it's done/ err'd out.
            this.db = mongoose.connection;
            return Promise.resolve(this.db);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    disConnect(obj) {
        try {
            this.db.close();
        } catch (error) {
            console.log('db connection close error-->', error);
        }
    }

    async find(dataModel, query = {}) {
        if (
            typeof dataModel.find === "undefined" ||
            typeof dataModel.find !== "function"
        ) {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                const response = await dataModel.find(query);
                return Promise.resolve(response);
            } catch (err) {
                return Promise.reject({
                    message: err.message,
                    status: err.code === 11000 ? 409 : 500,
                });
            }
        }
    }

    async save(dataModel) {

        if (typeof dataModel.save === "undefined" || typeof dataModel.save !== "function") {
            reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                let dbResp = await dataModel.save();
                resolve(dbResp);
            } catch (err) {
                console.log(err);
                reject({ message: err.message, status: (err.code === 11000) ? 409 : 500 });
            }
        }
    }

    async findAndDelete(dataModel, query = {}) {
        if (
            typeof dataModel.delete === "undefined" ||
            typeof dataModel.find !== "function"
        ) {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                const response = await dataModel.find(query).remove();
                return Promise.resolve(response);
            } catch (err) {
                return Promise.reject({
                    message: err.message,
                    status: err.code === 11000 ? 409 : 500,
                });
            }
        }
    }
}
export default DBService;