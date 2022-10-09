//---------clases
export class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    /*როდესაც constructor-ში პირდაპირ ვაკეთებთ
       ინიციალიზაციას აუცილებელია (readonly,private,public) -ის მიწერა */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
