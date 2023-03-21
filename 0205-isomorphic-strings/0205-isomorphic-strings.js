/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length)
        return false; 
    
    //create map for both strings
    const sMap = [256];
    const tMap = [256];
    
    //loop through all char in array
    for(let i = 0; i < s.length; i++){
        
        //compare arrays to see if equal. 
        if(sMap[s.charAt(i)] != tMap[t.charAt(i)])
            return false;
        
        sMap[s.charAt(i)] = i + 1;
        tMap[t.charAt(i)] = i + 1;
    }
        return true; // otherise return true
        
};