# grunt-dot-object

> Uses npm dot object to transform between json objects and dot format objects

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dot-object --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dot-object');
```

## The "dot_object" task

### Overview
In your project's Gruntfile, add a section named `dot` and/or a section named `undot` to the data object passed into
`grunt.initConfig()`.

```js
grunt.initConfig({
  dot: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
  undot: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    }
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, I use i18n target to specify json files that can be converted to the dot format, and .dot.json files
that can be converted to the graph format

```js
grunt.initConfig({
  dot : {
    i18n : {
      options : {},
      files : [
        {
          src : ['app/resources/i18n/*.json', '!app/resources/i18n/*.dot.json'],
          dest : 'app/resources/i18n/'
        }
      ]
    }
  },
  undot : {
    i18n : {
      options : {},
      files : [
        {
          src : 'app/resources/i18n/*.dot.json',
          dest : 'app/resources/i18n/'
        }
      ]
    }
  },
});
```

## Contributing

## Release History
