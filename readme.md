# adventure-runner

> Runner util for nodeschool [adventures](https://github.com/substack/adventure).


## Install

```
$ npm install --save adventure-runner
```


## Usage

If you are using `adventure` module to create your nodeshcool adventures:

Instead of doing something like:

```js
var adventure = require('adventure');
var shop = adventure('example-adventure');

var problems = [ 'dinosaurs', 'robots', 'wowsers' ];
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
```

You could do:

```js
var runner = require('adventure-runner');

runner('example-adventure',[ 'dinosaurs', 'robots', 'wowsers' ]);
```

or

```js
var runner = require('adventure-runner');

runner('example-adventure','./problems');
```

## API

### adventureRunner(name, problems)

#### name

*Required*  
Type: `string`

Name of your adventure.

#### problems

Type: `stirng` or `array`  

Path to your problems or array of problems.


## License

MIT © [hemanth](http://h3manth.com)
