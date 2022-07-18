export default class User {
  private email: string = "";
  private password: string = "";
  private name: string = "";
  private static userIDCounter: number = 1;
  private  id : number=0;
  constructor(email: string, password: string, name: string="") {
    this.setEmail(email);
    this.setPassword(password);
    this.setName(name);
    this.id=User.userIDCounter++;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getName(): string {
    return this.name;
  }

  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setName(name: string) {
    this.name = name;
  }

  setId(id: number) { this.id = id; }

  getId(): number { return this.id; }
}
