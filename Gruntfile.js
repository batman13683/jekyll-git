module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            static: {
                options: {
                    progrressive: true
                },
                files: [{
                    expand:true,
                    cwd: 'assets/_img-temp/',
                    src: ['**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: 'assets/img'
                }]
            }
        },
        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: []
            },
            files: ['*.html']
        },
        watch: {
            imagemin: {
                files: ['assets/_img-temp/**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                tasks: ['imagemin']
            },
            bootlint: {
                files: ['*.html'],
                tasks: ['bootlint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-bootlint');


    grunt.registerTask('default', ['bootlint','imagemin','watch']);

};
