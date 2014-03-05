module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'nested'
                },
                files: {
                    'src/css/style.css': 'src/css/sass/style.scss'
                }
            },
            build: {
                options: {
                    style: 'compressed',
                    sourcemap: 'true'
                },
                files: {
                    'public/css/style.min.css': 'src/css/sass/style.scss'
                }
            }
        },
        imagemin: {
            dynamic: {
              files: [{
                expand: true,
                cwd: 'src/images',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'public/images'
              }]
            }
        },
        bake: {
            build: {
                files: {
                    "public/index.html": "src/index.html"
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass:dist', 'sass:build']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['bake']
            }
        }

    });

    grunt.registerTask('default', ['imagemin','watch']);
};