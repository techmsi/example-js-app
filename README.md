* Javascript example app

## Usage
### Run mock api
* In terminal

```bash
# make it executable
chmod +x fake_api
# run the fake API
./fake_api
```
### Run app
* In a new terminal tab

```bash
 npm run devserver
```

### View app
* In a browser go to
`http://localhost:8080/webpack-dev-server/`

## Module: Assist
* Displays a request form
* Types retrieved from the mock api
* Sample data button loads test data
* Form resets after submission

### Technologies
* babel
 - used to transpile ES6 to ES5
* webpack
 - used to run modular code in a browser as a single script file.
 - loaders transform other resources(i.e. img,css) into JS.
 - autoprefixer-loader?browsers=last 2 versions
* angular 1.5.2
* bootstrap

## Profiling
```bash
npm run profile
```
* Then in browser open `http://webpack.github.io/analyse/`
