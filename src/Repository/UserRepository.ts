import { Connection } from "mysql";
import User from "../Models/User.js";

export class UserRepository {
  private users = new Map<number, User>([
    [1, new User("ibtehal.email.com", "1234", "ibtehal")],
    [1, new User("rahaf.email.com", "1234", "rahaf")],
    [1, new User("tala.email.com", "1234", "tala")],
  ]);

  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }



  async getUserByEmail(email: string): Promise<User | null> {
    let user = null;
    console.log("before query");
    user = await this.getUser(email);
    console.log("after query");
    return user;
  }
}
