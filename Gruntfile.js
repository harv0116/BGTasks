// JavaScript Document

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
		  fonts: {
			files: [
			  {
				expand: true,
				src: ['bower_components/components-font-awesome/fonts/**'],
				dest: 'dist/fonts',
				flatten: true
			  }
			]
		  },
		  bootstrapcss: {
			files: [
			  {
				expand: true,
				src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
				dest: 'dist/css',
				flatten: true
			  }
			]
		  },
		  bootstrapjs: {
			files: [
			  {
				expand: true,  
				src: ['bower_components/bootstrap/dist/js/bootstrap.js'],
				dest: 'dist/js',
				flatten: true
			  }
			]
		  },
		  fontcss: {
			files: [
			  {
				expand: true,  
				src: ['bower_components/components-font-awesome/css/font-awesome.css'],
				dest: 'dist/css',
				flatten: true
			  }
			]
		  },
		  jqueryjs: {
			files: [
			  {
				expand: true,  
				src: ['bower_components/jquery/dist/jquery.js'],
				dest: 'dist/js/jquery.js',
				flatten: true
			  }
			]
		  },
		  maincss: {
			files: [
			  {
				expand: true,  
				src: ['css/main.css'],
				dest: 'dist/css',
				flatten: true
			  }
			]
		  },
		  mainjs: {
			files: [
			  {
				expand: true,  
				src: ['js/main.js'],
				dest: 'dist/js',
				flatten: true
			  }
			]
		  },
		  indexhtml: {
			files: [
			  {
				expand: true,  
				src: ['index.html'],
				dest: 'dist/',
				flatten: true
			  }
			]
		  }
		},
		uglify: {
			my_target: {
			  files: {
				'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
			  }
			}
		 },
		 cssmin: {
		  options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
			}
		  }
		},
		clean: {
		  css: ["dist/css/*.css", "!dist/css/*.min.css"],
		  js:  ["dist/js/*.js", "!dist/js/*.min.js"]
		}
		
	});
		
	grunt.loadNpmTasks('grunt-contrib-copy');
		
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['copy','uglify','cssmin','clean']);
};