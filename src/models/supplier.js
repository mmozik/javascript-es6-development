class Supplier {
  constructor(param = {}) {
    /** @private { Supplier.helloMessage } */
    this.helloMessage = param.message || "Hello from Supplier";
  }

  // call the method using dot syntax but without the parentheses. the method acts like a property
  get message() {
    return `${this.helloMessage}`;
  }

  // a setter works like a getter. it masks a method by making the method appear like a property.
  // a setter accepts a single argument and changes a property rather than just exposing information
  set message(value) {
    this.helloMessage = value;
  }

  sayHello() {
    return this.helloMessage;
  }
}

export { Supplier };
