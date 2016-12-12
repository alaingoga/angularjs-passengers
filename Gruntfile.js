module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bower: {
      install: {
        options: {
          copy: false,
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },

    less: {
      content: {
        paths: ['styles/less/'],
        files: [{
            cwd: 'styles/less/',
            src: ['itinerary.less'],
            dest: 'styles/dist/',
            expand: true,
            ext: '.min.css',
            extDot: 'last',
            filter: 'isFile'
        }]
      }
    },

    watch: {
      css: {
        files: 'styles/less/**/*.less',
        tasks: ['less']
      }
    }

  });

  grunt.loadNpmTasks('grunt-bower-task'); 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');   

};