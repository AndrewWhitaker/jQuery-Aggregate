/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                    ' Licensed MIT */\n'
            },
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    QUnit: true
                }
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'qunit']);

};
