'use strict';
var fs = require('fs'),
    path = require('path'),
    adventure = require('adventure');

module.exports = function (name, problems) {
    var getDirectories = function(srcpath) {
        if(! fs.existsSync(srcpath)) {
            throw new Error(srcpath || 'srcpath' + ' not found!');
        }
        return fs.readdirSync(srcpath).filter(function(file) {
            return fs.statSync(path.join(srcpath, file)).isDirectory();
        });
    };
    
	if (typeof name !== 'string') {
		throw new TypeError('Expected a string');
	}
    
    var requireProblems = function (problems, root) {
        root = root || './problems/';
        var advent = adventure(name);
        problems.forEach(function(prob){
              console.log(advent);
              advent.add(prob, function () {
                  return require(path.join(root + prob));
              });
        });
        advent.execute(process.argv.slice(2));
    };
        
    if (problems instanceof Array) {
        if(! fs.existsSync('./problems')) {
            throw new Error('./problems dir not found!');
        }
        requireProblems(problems);
    } else {
       requireProblems(getDirectories(problems),problems);
    }
};
