/*
 * grunt-dot-object
 * http://gruntjs.com/
 */

'use strict';

var path = require('path');
var chalk = require('chalk');

function getFileNameNoExt(filePath) {
    var fileName = filePath.match(/\/([^/]*)$/)[1],
        fileNameNoExt = fileName.substr(0, fileName.lastIndexOf('.')) || fileName;
        
    return fileNameNoExt;
}

module.exports = function (grunt) {
	// Internal lib.
	var worker = require('./lib/work').init(grunt);

	grunt.registerMultiTask('dot', 'Dotify JSON File.', function () {
        var dotifiedFiles = 0;
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
          //a : 'default'
        });
        
		this.files.forEach(function (f) {
			var result,
                src = f.src,
                srcFileNameNoExt = getFileNameNoExt('' + src),
                destFile = f.dest + '/' + srcFileNameNoExt + '.dot';
            
			try {
				result = worker.dot(src, options);
			} catch (e) {
				console.log(e);
				var err = new Error('Dotify failed.');
				if (e.message) {
					err.message += '\n' + e.message + '. \n';
					if (e.line) {
						err.message += 'Line ' + e.line + ' in ' + src + '\n';
					}
				}
				err.origError = e;
				grunt.log.warn('Dotifying source ' + chalk.cyan(src) + ' failed.');
				grunt.fail.warn(err);
			}

			// Write the destination file.
			grunt.file.write(destFile, result);
            grunt.verbose.writeln('File ' + chalk.cyan(destFile) + ' created');
            dotifiedFiles++;
		});
        
        if (dotifiedFiles > 0) {
          grunt.log.ok(dotifiedFiles + ' ' + grunt.util.pluralize(dotifiedFiles, 'file/files') + ' created.');
        } else {
          grunt.log.warn('No files created.');
        }
	});
    
    
    grunt.registerMultiTask('undot', 'Turn dot json file into json graph file.', function () {
        var graphedFiles = 0;
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
          //a : 'default'
        });
        
		this.files.forEach(function (f) {
			var result,
                src = f.src,
                srcFileNameNoExt = getFileNameNoExt('' + src),
                destFile = f.dest + '/' + srcFileNameNoExt + '.json';
            
			try {
				result = worker.undot(src, options);
			} catch (e) {
				console.log(e);
				var err = new Error('Graphing failed.');
				if (e.message) {
					err.message += '\n' + e.message + '. \n';
					if (e.line) {
						err.message += 'Line ' + e.line + ' in ' + src + '\n';
					}
				}
				err.origError = e;
				grunt.log.warn('Graphing source ' + chalk.cyan(src) + ' failed.');
				grunt.fail.warn(err);
			}

			// Write the destination file.
			grunt.file.write(destFile, result);
            grunt.verbose.writeln('File ' + chalk.cyan(destFile) + ' created');
            graphedFiles++;
		});
        
        if (graphedFiles > 0) {
          grunt.log.ok(graphedFiles + ' ' + grunt.util.pluralize(graphedFiles, 'file/files') + ' created.');
        } else {
          grunt.log.warn('No files created.');
        }
	});
};
