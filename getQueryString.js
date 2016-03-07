var getQueryString = (function() {
    var vars = [];
    
    return { // public function
        init: function(){
            //擷取 Query String 之參數
            var hashMap;
            var stringArray = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');   
            
            for(var i = 0; i < stringArray.length; i++)
            {
                hashMap = stringArray[i].split('=');
                vars.push(hashMap[0]);
                vars[hashMap[0]] = hashMap[1];
            }
            
            return true;
        }, // end init()
        
        getParameter: function(input) {
            
            if (vars.indexOf(input) == -1)
                return null;
                
            return vars[input]; 
        }
    }
    
})();