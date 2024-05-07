{
    // getter & setter
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        set deposit (amount: number){
            this._balance = this._balance + amount;
        }
        // addDeposit(amount : number) {
        //     this._balance = this._balance + amount
        // }

        // getter
        get balance (){
           return this._balance;
        }
        // getBalance(){
        //     return this._balance;
        // }
    }

   

    const goribManusherAccount = new BankAccount(10, 'habibullah', 20);
    // goribManusherAccount.addDeposit(30);
    goribManusherAccount.deposit = 80;
    // const myBalance = goribManusherAccount.getBalance();
    const myBalance = goribManusherAccount.balance
    console.log(myBalance);


















}