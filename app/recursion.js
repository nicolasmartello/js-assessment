if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	console.log( data.files[1].files );
        console.log( data.files[2] );
    	
    	//return data.files.length;
    },

    permute: function(arr) {
    	
    }
  };
});
