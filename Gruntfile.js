module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      main: {
        options: ['>1% in US'],
        src: 'public/style/style.css'
      }
    },
    babel: {
      dev: {
        options: {
          sourceMap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    bower_concat: {
      main: {
        dest: 'public/lib/build.js',
        cssDest: 'public/lib/build.css'
      }
    },
    clean: ['public'],
    connect: {
      main: {
        options: {
          port: 9000,
          base: 'src/',
          open: true,
          livereload: true
        }
      }
    },
    copy: {
      main: {
        files: [
        {
          expand: true,
          cwd: 'src/',
          src: [
            '**',
            '!**/*.scss',
            '!**/*.js'      
          ],
          dest: 'public/',
          filter: 'isFile'
        }
        ]
      }
    },
     cssmin: {
      main: {
        files: {
          'src/lib/build.css' : 'src/lib/build.css'
        }
      }
    },
		sass: {
      prod: {
        files: {
          'public/style/main.css' : 'src/sass/main.scss'
        }
			},
      dev: {
        files: {
          'src/style/style.css' : 'src/sass/main.scss' 
        }
      }
		},
    uglify: {
      bower: {
        files: {
          'public/lib/build.js' : 'public/lib/build.js'
        }
      },
      main: {
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
		watch: {
      }, 

      files: [
        'public/style/style.css',
        'public/js/**/*.js',
        'public/**/*.html'
      ]
	});
  
	grunt.registerTask('default',['watch']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'bower_concat',
    'sass:prod',
    'autoprefixer',
    'uglify',
    'cssmin'
  ]);
  grunt.registerTask('build-dev', [
    'clean',
    'copy',
    'bower_concat',
    'sass:dev',
    'autoprefixer'
  ]);
  grunt.registerTask('serve', [
    'build-dev',
    'connect',
    'watch'
  ]);
}

