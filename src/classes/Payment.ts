import { HasFormatter } from "../interfaces/HasFormatter.js";

//---------clases
export class Payment implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;
  /*როდესაც constructor-ში პირდაპირ ვაკეთებთ
     ინიციალიზაციას აუცილებელია (readonly,private,public) -ის მიწერა */
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
