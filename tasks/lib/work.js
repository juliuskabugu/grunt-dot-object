/*
 * grunt-dot-object
 * https://gruntjs.com/
 *
 */

'use strict';

var dot = require('dot-object');

exports.init = function(grunt) {
    
    var exports = {};
    
    exports.dot = function(file, options) {
        var jsonText = grunt.file.read(file);
        var jsonObject = JSON.parse(jsonText);
        
        var outputObject = dot.dot(jsonObject);
        var outputText = JSON.stringify(outputObject, null, '\t');
        
        return outputText;
    };
    
    exports.undot = function(file, options) {
        var jsonText = grunt.file.read(file);
        var jsonObject = JSON.parse(jsonText);
        
        var outputObject = dot.object(jsonObject);
        var outputText = JSON.stringify(outputObject, null, '\t');
        
        return outputText;
    };
    
    return exports;
};