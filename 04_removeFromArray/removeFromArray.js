const removeFromArray = function(arr, ...num){
    let numArr = [...num]
    for(let i=0; i<numArr.length; i++){
        for(let x=0; x<arr.length; x++){
            if(arr[x] === numArr[i]){
                arr.splice(x, 1)
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;