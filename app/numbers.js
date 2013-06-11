if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        
        var numBit = num.toString(2);
        
        var res = numBit[numBit.length - bit];
       
        // 1 & num >> (bit-1);
        return parseInt(res);
    },

    base10: function(str) {
        
        return parseInt(str,2);
    
    },

    convertToBinary: function(num) {

          var res = num.toString(2)
          
          if(res.length < 8)
            res = "0" + res;

          return res;

    },

    multiply: function(a, b) {

        var res = a * b;

        var fix = res.toPrecision(1);

        return parseFloat(fix);

    }
  };
});

