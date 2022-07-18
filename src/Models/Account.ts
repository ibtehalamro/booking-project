export default class Account {
  private businessName: string;
  private country: string;
  private currency: string;
  private accountOwnerId: number = 0;
 
  private MAX_ALLOWED_USERS: number = 2;
  private users:number[]=[];
  constructor(businessName: string, country: string, currency: string) {
    this.businessName = businessName;
    this.country = country;
    this.currency = currency;
  }
  public getBusinessName(): string {
    return this.businessName;
  }
  public setBusinessName(value: string) {
    this.businessName = value;
  }
  public getCountry(): string {
    return this.country;
  }
  public setCountry(value: string) {
    this.country = value;
  }
  public getCurrency(): string {
    return this.currency;
  }
  public setCurrency(value: string) {
    this.currency = value;
  }
  public getAccountOwnerId(): number {
    return this.accountOwnerId;
  }
  public setAccountOwnerId(value: number) {
    this.accountOwnerId = value;
  }
}
