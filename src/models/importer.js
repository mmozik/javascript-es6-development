import { Supplier } from "./supplier";

class Importer extends Supplier {
  constructor(param = {}) {
    super(param);
    this.message = param.message || "Hello from Importer";
  }
}

export { Importer };
