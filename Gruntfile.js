module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('component.json'),
    meta: {
      banner: '/*!\n<%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "" : "" %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [
          '<%= meta.banner %>',
          'src/contains.js'
        ],
        dest: 'contains.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'contains.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/*.html']
    },
    jshint: {
      files: ['src/**/*.js'],
      options: {
        bitwise: true,
        curly: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        regexp: true,
        undef: true,
        strict: true,
        trailing: true,
        smarttabs: true,
        browser: true,
        nonstandard: true,
        globals: {
          ok: true,
          test: true,
          console: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};