if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {

         return /[0-9]/.test(str);

    },

    containsRepeatingLetter : function(str) {

        return /([a-z])\1/i.test(str);

    },

    endsWithVowel : function(str) {
        
        return /[aeiou]$/i.test(str);

    },

    captureThreeNumbers : function(str) {
        var res = str.match(/[0-9]{3}/);
        if(res === null)
            return false;
        else
            return res[0];
               
    },

    matchesPattern : function(str) {
        
        return /^\d{3}\-\d{3}\-\d{4}$/.test(str);

    },
    isUSD : function(str) {
        
        return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);

    }
  };
});
