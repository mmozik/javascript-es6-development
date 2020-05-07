import { Supplier } from "./supplier";

class Vendor extends Supplier {
  constructor(param = {}) {
    super(param);
    this.message = param.message || "Hello from Vendor";
  }
}

export { Vendor };
