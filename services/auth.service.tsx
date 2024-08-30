import { Account, ID } from "appwrite";
import client from "../configs/appwrite.config";

class AuthService {
  private static instance: AuthService;
  private static account: Account = new Account(client);

  public static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(data: any): Promise<any> {
    const { email, password } = data;
    console.log(`Username: ${email} Password: ${password}`);
    return AuthService.account.createEmailPasswordSession(email, password);
  }
  public async register(data: any): Promise<any> {
    const { email, username, password } = data;

    // alert(`Username: ${username}, ${email} Password: ${password}`);
    return AuthService.account.create(ID.unique(), email, password, username);
  }
  public async logout() {
    return AuthService.account.deleteSession("current");
  }

  public getAccount() {
    return AuthService.account.get();
  }
}
export default AuthService;
