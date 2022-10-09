import { HasFormatter } from "../interfaces/HasFormatter.js";

//---------clases
export class Invoice implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;
  /*როდესაც constructor-ში პირდაპირ ვაკეთებთ
     ინიციალიზაციას აუცილებელია (readonly,private,public) -ის მიწერა */
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
