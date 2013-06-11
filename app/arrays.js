if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var suma = 0;
        $.each(arr, function ( key, val ){
                
            suma = parseInt( suma  + val );        
        });
        
        return suma;
    },

    remove : function(arr, item) {
        
        $.each(arr, function ( key, val ){
        
            if( val == item ){
        
                arr.splice( key, 1 );
        
            }
        
        });

        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
         
        $.each(arr, function ( key, val ){
        
            if( val == item ){
        
                arr.splice( key, item );
        
            }
        
        });

        return arr;

    },

    append : function(arr, item) {
        
        arr.push(item);

        return arr;

    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
       return arr1.concat(arr2); 
    },

    insert : function(arr, item, index) {
        
        var newArr = arr.slice( 0, index );
        
        newArr.push( item );
        
        for ( var i = parseInt( index ); i < arr.length;  i++) {
        
            newArr.push(arr[i]);
        
        };
        
        return newArr; 
    },

    count : function(arr, item) {
       
       var cont = 0;
       
       $.each( arr, function ( key, val) {

            if( val === item ) cont ++;

       });

       return cont;

    },

    duplicates : function(arr) {

        var flag = 0;
       
        $.each( arr, function ( key, val) {

             arr.forEach(function(entry) {
                  
                  if( val === entry ) {

                    flag ++;

                    if ( flag > 1 )
                        arr.splice( key, key);
                  }
                    

            });

            if( flag == 1 ) 
                arr.splice( key, key);

            flag = 0;

        });
        return  arr.sort();

    },

    square : function(arr) {
        var newArr = [];
        var valor = 0;

        $.each( arr, function ( key, val) {
            
            valor = Math.pow( val, 2 );

            newArr.push( valor );

        });

        return newArr;
    },

    findAllOccurrences : function(arr, target) {
        var newArr=[];

         $.each( arr, function ( key, val) {

            if( val === target ){

                newArr.push(key);

            }

        });
         
        return newArr;
    }

  };
});
