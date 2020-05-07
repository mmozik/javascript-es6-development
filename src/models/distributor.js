import { Supplier } from "./supplier";

class Distributor extends Supplier {
  constructor(param = {}) {
    super(param);
    this.message = param.message || "Hello from Distributor";
  }
}

export { Distributor };
