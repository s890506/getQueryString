var getQueryString = (function() {
    var vars = [];
    
    return { // public function
        init: function(){
            //擷取 Query String 之參數
            var hashMap;
            var stringArray = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');       
            
            console.log(stringArray);         
            
            for(var i = 0; i < stringArray.length; i++)
            {
                hashMap = stringArray[i].split('=');
                vars.push(hashMap[0]);
                vars[hashMap[0]] = hashMap[1];
            }
            
            return true;
        }, // end init()
        
        getParameter: function(input) {        
            
            if (vars.length == 1)
                return 'There are no query string.';
                
            return vars[input]; 
        }
    }
    
})();