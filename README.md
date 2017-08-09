# UserPersistanceLayer

an API to manage users.

## Set Up

```
$ brew install mongodb
$ clone this repo locally
$ npm install
$ mongod in another tab
$ node server.js
$ open http://localhost:8080
```

## To run the tests

```
$ ./node_modules/.bin/protractor

```
<img width="608" alt="screen shot 2017-08-09 at 13 30 49" src="https://user-images.githubusercontent.com/13749603/29121998-b5af66e8-7d08-11e7-920a-e2ddb232e198.png">

## Screenshots

<img width="1680" alt="screen shot 2017-08-09 at 13 41 52" src="https://user-images.githubusercontent.com/13749603/29122003-b7d6bdc2-7d08-11e7-9adc-9e5fecffb233.png">
<img width="1680" alt="screen shot 2017-08-09 at 13 42 10" src="https://user-images.githubusercontent.com/13749603/29122012-ba3e7ef6-7d08-11e7-9272-e6057f873d84.png">


## Other info
- __How your API is to be consumed (a custom interface or something like Google Chrome's "Postman" or Swagger).__
I have added the User interface for the database which allows easy consumption of the API. The same request can be sent via postman. 
- __Use of an industry standard data exchange format.__
Have used JSON
- __Sanitization checks of inputs.__
This is done via the mongodb driver mongoose + ORM mapping.
- __Implementation of test coverage.__
Test section above.
