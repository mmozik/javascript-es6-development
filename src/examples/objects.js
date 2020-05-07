function getApiConfiguration(params) {
  const date = JSON.stringify(new Date().toLocaleString());

  return {
    baseURL: params.baseURL,
    token: params.token,
    validTo: date
  };
}

function displayTokenStatus(params) {
  const token = getApiConfiguration(params);

  return `Your Authentication Token is valid until ${token.validTo}`;
}

function copyObjectCopyingSimpleValues() {
  const api2 = {
    baseURL: "",
    token: ""
  };

  const updatedAPI = Object.assign({}, api2, apiConfig);

  return updatedAPI;
}

function deepCopyObject() {
  const api3 = {
    baseURL: "",
    token: "",
    nestedObject: {
      prop1: "",
      prop2: ""
    }
  };

  const customObject = {
    prop1: "p1",
    prop2: "p2"
  };

  const copyObject = Object.assign({}, api3, {
    nestedObject: Object.assign({}, customObject)
  });

  return copyObject;
}

export const apiConfig = {
  baseURL: "https://api.test.com",
  token: "authentication_token_example"
};

export {
  getApiConfiguration,
  displayTokenStatus,
  copyObjectCopyingSimpleValues,
  deepCopyObject
};
