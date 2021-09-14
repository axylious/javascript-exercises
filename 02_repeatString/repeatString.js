const repeatString = function(str, num) {
    if(num < 0){
        return 'ERROR';
    } else if(num === 0){
        return '';
    } else {
        var newStr = '';
        for(let i=0; i<num; i++){
            newStr += str;
        }
        return newStr
    }

};

// Do not edit below this line
module.exports = repeatString;
