/*
 * toolkit
 * https://github.com/Jon Schlinkert/toolkit
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'helpers/*.js', 'test/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: './assets',
          layout: 'src/templates/layouts/default.hbs',
          data: [
            'src/data/*.{json,yml}',
            'package.json'
          ],
          partials: [
            'src/templates/partials/*.hbs'
          ]
        },
        files: {
          './': ['src/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['./*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble']);
};

