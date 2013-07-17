if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

        var arr = [];

        function arrFn( objData ){

            var files = objData.files;
            
            for (var i = 0; i < files.length; i++){
                
                if( typeof(files[i]) === "string" ){
                    if( dirName ){

                        if( objData.dir === dirName )
                            arr.push( files[i] );
                    }else{
                        arr.push( files[i] );
                    }
                    
                        

                }else{
                    
                    if( objData.dir === dirName )
                        files[i].dir = dirName;

                    arrFn(files[i]);
                
                }
            
            }
            
            return arr;    
        
        }
        var result = arrFn(data);
            
        return result;
    	
    },

    permute: function(arr) {
        
    }
  };
});
