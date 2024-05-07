{
    // access modifiers
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount : number) {
            this._balance = this._balance + amount
        }
        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        type: string;
        constructor(id: number, name: string, _balance: number, type: string) {
            super(id, name, _balance)
            this.type = type;
        }
        
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(10, 'habibullah', 20);
    goribManusherAccount.addDeposit(30);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);


















}