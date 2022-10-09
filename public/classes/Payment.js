//---------clases
export class Payment {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    /*როდესაც constructor-ში პირდაპირ ვაკეთებთ
       ინიციალიზაციას აუცილებელია (readonly,private,public) -ის მიწერა */
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
