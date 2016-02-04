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
        }
    });
    
    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');
  
    grunt.registerTask('build', ['sass']);
};