import { Distributor } from "./classes/distributor";
import { Importer } from "./classes/importer";
import { Vendor } from "./classes/vendor";

function getSuppliers() {
  let array = [];
  let distributor = new Distributor();

  distributor.message = "Hello from New Distributor";

  array = [...array, distributor, new Importer(), new Vendor()];

  return array;
}

export { getSuppliers };
