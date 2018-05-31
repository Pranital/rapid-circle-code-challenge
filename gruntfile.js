module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package-lock.json'),
    cssmin: {
      my_target: {
        files:[{
          expand : true,
          cwd : 'less/',
          src : ['style.css', '!*.min.css'],
          dest : 'less/',
          ext : '.min.css'
        }]
      }
    },
    uglify: {
      options:{
          manage: false
      },
      my_target:{
        files:{'js/index.min.js' : ['js/index.js']}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['cssmin']);

};
