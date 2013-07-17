if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var result = $.Deferred();
    	result.resolve(value);
    	return result.promise();
    },

    manipulateRemoteData : function(url) {
    	var objDef = $.Deferred();
    	var result = $.get(url);
    	result.done(function (data) {
    		var arrPeople = $.map(data.people, function(person) {
				          return person.name;
				        });
            
            objDef.resolve(arrPeople.sort());
    		
    	});
        return objDef.promise();
    }
  };
});
