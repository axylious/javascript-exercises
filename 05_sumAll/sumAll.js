const sumAll = function(num1, num2) {
    var tot = 0;

    if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        if(num1 > 0 && num2 > 0){
            if(num1 > num2){
                for(let i=1; i<num1+1; i++){
                    tot += i;
                }
                return tot;
            } else if(num1 < num2){
                for (let j=1; j<num2+1; j++) {
                    tot += j;
                }
                return tot;
            } else return 'ERROR';
        } else return 'ERROR';
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
