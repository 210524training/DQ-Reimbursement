export default class User {
  constructor(
    public username: string,
    public password: string,
    public role: string,
    public messages: string = '',
    public amountAwarded: number = 0,
  ) {} // reimbursement balance?
}

export type Role = 'Employee' | 'Supervisor' | 'Head' | 'Benco';
