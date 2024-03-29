// view reimbursement status
// view messages
import Reimbursement from '../models/reimbursement';
import User from '../models/user';
import userRepository, { UserRepository } from '../repositories/userRepo';

export class UserService {
  private dao: UserRepository;

  constructor() {
    this.dao = userRepository;
  }

  getAll(): Promise<User[]> {
    return this.dao.getAll();
  }

  findUser(username: string): Promise<User | null> {
    return this.dao.findByUsername(username);
  }

  deleteUser(user: User): Promise<boolean> {
    return this.dao.deleteUser(user);
  }

  async login(username: string, password: string): Promise<User> {
    const user = await this.dao.findByUsername(username);

    if(!user) {
      throw new Error('No username matches');
    }

    if(user.password !== password) {
      throw new Error('Password does not match');
    }

    return user;
  }

  register(user: User): Promise<boolean> {
    return this.dao.attemptRegister(user);
  }

  // async addNotes(username: string): Promise<User | null> {
  //   // get by username and role?
  //   const found = await this.dao.findByRole(username);
  //   // if they exist, send info as object
  //   const note = `${username}: ${note}`;
  //   // assign it to user.message
  //   if(found) {
  //     found.messages = note;
  //     await this.dao.updateMessage(found);
  //     return found;
  //   }
  //   return null;
  // }

  // getNotes(username: string): Promise<Message[]> {
  //   return this.dao.getMessages(username);
  // }

  // get user from reimbursement and add amoun awarded value
  async getUser(reimbursement: Reimbursement): Promise<User | null> {
    const found = await this.dao.findByUsername(reimbursement.username);
    if(found) {
      found.awarded = reimbursement.awarded;
      return found;
    } return null;
  }

  // add award to user table
  addAward(user:User): Promise<boolean> {
    return this.dao.addAward(user);
  }

  // check if user has maxed their benefits
  async awardAvailable(username: string): Promise<boolean> {
    console.log('reached awardavail func');
    console.log(username);
    const result = await this.dao.findByUsername(username);
    console.log(typeof result);
    if(result) {
      const amount = result.awarded;
      console.log(amount);
      if(amount >= 1000) {
        return false;
      } if(result === null) {
        return true;
      }
    } return true;
  }
}

const userService = new UserService();

export default userService;
