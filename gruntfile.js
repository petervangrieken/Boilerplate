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
            }
        },
        cssmin: {
            combine: {
                files: {
                    'public/css/style.min.css': ['src/css/style.css']
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
                tasks: ['sass', 'cssmin', 'imagemin']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['bake']
            }
        }

    });

    grunt.registerTask('default', ['imagemin','watch']);
};