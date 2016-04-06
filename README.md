# es6-query
[![Build Status](https://travis-ci.org/JFusco/es6-query.svg?branch=master)](https://travis-ci.org/JFusco/es6-query)
[![devDependency Status](https://david-dm.org/JFusco/es6-query/dev-status.svg)](https://david-dm.org/JFusco/es6-query#info=devDependencies)

> Simple, lightweight, DOM manipulation object using plain ES6 syntax.

## Getting Started ##

#### Install
```
npm install es6-query --save-dev
```

#### Usage
```
import query from 'es6-query';

//-- Simple example
const dom = query('#some-id');

if(dom.hasClass('some-class')){
	dom.removeClass('some-class');
}

//-- It's chainable!
dom.addClass('chain').removeClass('some-class');
```

## API ##
* **`addClass(name:String)`**
* **`removeClass(name:String)`**
* **`hasClass(name:String)`**
* **`toggleClass(name:String)`**
* **`remove()`**
* **`get(index:int)`**
* **`data(name:int)`**

## Tests ##
```
npm test
```

## License ##

 * [MIT License](http://www.opensource.org/licenses/mit-license.php)