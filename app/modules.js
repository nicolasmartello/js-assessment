if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var name = str1 + ', ' + str2;
    	var geeting = 'hi';

    	function sayIt(){
    		return geeting + ', ' + name;
    	}
    }
  };
});

