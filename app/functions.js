if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
       
       return fn(arr[0],arr[1],arr[2]);

    },

    speak : function(fn, obj) {
        /*
      var sp = Object.create(obj);
       
      sp['response'] = fn;
        
       return sp.response();
      ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call **
       */
       return fn.call(obj);
    },

    functionFunction : function(str) {
        
        return  function ( y ){
                    
                    return str + ', ' + y;    
               
                };

    },

    makeClosures : function(arr, fn) {

        var funcs = [];

        var returnFun = function (valor){  
                          
                            return function () { 
                                   
                               return fn(valor);

                            };

                        };

        for(var i = 0; i <= arr.length-1; i++){

            funcs.push( returnFun( arr[i] ) );

        }
       
        return funcs;
    
    },

    partial : function(fn, str1, str2) {

        return function (){

           return fn(str1,str2,arguments[0])
        
        };

    },

    useArguments : function() {
        
        var res = 0;

       $.each(arguments,function ( key, val ) {
        
            res += val;

        });
        
        return res;
    
    },

    callIt : function(fn) {
          /*var arr = [];
          for (var i = 1; i < arguments.length; i++ ){
              arr.push(arguments[i]);
          }*/

          return fn.apply( null, [].slice.call( arguments, 1, arguments.length ) );
    },

    partialUsingArguments : function(fn) {

        var arr =  [].slice.call(arguments, 1, arguments.length); 

        return function (){

          var newArr = arr.concat( [].slice.call( arguments ) );

          return fn.apply(null,newArr);

        };

    },

    curryIt : function(fn) {
        //console.log(fn.length);
        function ciclo(dato){
          
          return function (valor){
            //entre argumentos se puede usar simplente concat - 
            //si es array y arguments se debe usar Array.prototype para manipular el argumento y que sea compatible con el array
            var arr = dato.concat(valor);
            
            if( typeof valor === 'number' && arr.length < fn.length ){

              return ciclo(arr);

            }else{

              return fn.apply(null, [].slice.call(arr) );

            }
          }
       }

       return ciclo([]);//Array.prototype
    }      
  };
});
