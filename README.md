# Project: Phones Catalogue - Client

**Application** name: mobile-catalogue-client

**Version**: 1.0.0

**Description**: Phone catalogue -  bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Deploy URL**: https://mobile-catalogue-client.herokuapp.com

**Docker image**: https://hub.docker.com/repository/docker/mirko1075/mobile-catalogue-client

​	Docker image points to the localhost (Stating that the server is installed on the same machine with the docker image)

**Environment**: 
	Node: 16.5
	Npm: 8.1
	React: 17.0.2
	Babel: 7.16.7

##### Environment variables

REACT_APP_API_ROOT : Defines the API root endpoint

### Installation:

Clone the repository

```
$git clone https://github.com/mirko1075/mobile-catalogue-client.git
$cd ./mobile-catalogue-client
$npm i

```

### Start application

```
$npm run start
```

#### Test application : jest

```
$npm run test
```

#### Run Docker image

```
$docker run --rm -p 3001:3000 mirko1075/mobile-catalogue-client
```



### Dependencies:

 "**dependencies**": {

  "@babel/core": "^7.16.7",

  "@babel/eslint-parser": "^7.16.5",

  "@testing-library/jest-dom": "^5.16.1",

  "@testing-library/react": "^12.1.2",

  "@testing-library/user-event": "^13.5.0",

  "axios": "^0.24.0",

  "bootstrap": "^5.1.3",

  "classnames": "^2.3.1",

  "dotenv": "^10.0.0",

  "jquery": "^3.6.0",

  "popper": "^1.0.1",

  "react": "^17.0.2",

  "react-bootstrap": "^2.0.4",

  "react-card-flip": "^1.1.5",

  "react-dom": "^17.0.2",

  "react-icons": "^4.3.1",

  "react-lottie-player": "^1.4.1",

  "react-router-dom": "^6.2.1",

  "react-scripts": "^5.0.0",

  "web-vitals": "^2.1.2"

 },

 

 "**devDependencies**": {

  "@babel/plugin-proposal-class-properties": "^7.16.7",

  "@babel/plugin-transform-runtime": "^7.16.7",

  "@babel/preset-react": "^7.16.5",

  "babel-plugin-transform-class-properties": "^6.24.1",

  "eslint": "^8.5.0",

  "eslint-config-airbnb": "^19.0.4",

  "eslint-plugin-import": "^2.25.3",

  "eslint-plugin-jsx-a11y": "^6.5.1",

  "eslint-plugin-react": "^7.28.0",

  "eslint-plugin-react-hooks": "^4.3.0",

  "history": "^5.2.0",

  "jest-canvas-mock": "^2.3.1"

 }
