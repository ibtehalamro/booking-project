import { Connection } from "mysql";
import User from "../Models/User.js";
 
export class UserRepository {
  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }


  getUser = (email: string):Promise<User> => {
    return new Promise((resolve, reject)=>{
        this.connection.query( `SELECT * FROM users WHERE email = '${email}'`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements );
        });
    });
};

async   getUserByEmail(email: string):Promise<User | null> {
    let user=null;
    console.log("before query");
  user = await this.getUser(email)
  
    console.log("after query");

    return user;
  }
}
