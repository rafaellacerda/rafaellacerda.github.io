/// <binding ProjectOpened='bower' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/folha-estilo.css': 'scss/folha_estilo.scss',
                }
            }
        },
        
        cssmin: {
            sitecss: {
                files: {
                    'css/folha-estilo.min.css': ['css/folha-estilo.css']
                }
            }
        }

    });
    
    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    grunt.registerTask('build', ['sass', 'cssmin']);
};