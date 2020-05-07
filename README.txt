1. Install Node.js

2. Configure a New ES6 Project
    npm init -f
    code .
    npm install --save-dev babel-cli babel-preset-es2015
    npm audit fix

3. Update package.json with
  "babel": {
    "presets": [
      "es2015"
    ]
  }

4. Configure Babel to Transpile ES6 to ES5. Add a "compile" script to your package.json file:
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "babel src --out-dir .compiled --source-maps --watch"
    }

5. Start the Babel compiler:
    npm run compile

We now have a basic ES6 application that's automatically compiled whenever changes are made.

6. Add Launch Configuration in order to run your application in debug mode. In the menu bar, 
    click "Debug -> Open Configurations" and choose "Node.js" when prompted to select an environment.

    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\src\\app.js",
            "outFiles": [ "${workspaceRoot}\\.compiled\\**\\*.js" ]
        }
    ]

7. Debug your Application. Note that our launch configuration is set up to always run the src/app.js application.
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Current File",
      "program": "${file}",
      "outFiles": [ "${workspaceRoot}/.compiled/**/*.js" ]
    }