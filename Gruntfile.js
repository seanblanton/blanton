'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass', 'cssmin']
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['main.scss'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },


        cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: '_site/css',
                  src: ['*.css', '!*.min.css'],
                  dest: '_site/css',
                  ext: '.min.css'
                }]
              }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dist: {
                     expand: true,
                    flatten: true,
                    src: '_site/css/main.css',
                    dest: '_site/css/'
                  },
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe',
                'autoprefixer:dist',
                'cssmin'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass',
        'autoprefixer:dist'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};