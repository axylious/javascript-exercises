const reverseString = function(str) {
    var arr = str.split('');
    var rev = [];
    for(let i=0; i<str.length; i++){
        let x = arr[i];
        rev.unshift(x);
    }
    return rev.join('');
};

// Do not edit below this line
module.exports = reverseString;
