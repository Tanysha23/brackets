module.exports = function check(str, bracketsConfig) {
    let array = str.split("");
    let stack = [];

    for (let i = 0; i < array.length; i++) {
        stack.push(array[i]);
        for (let j = 0; j < bracketsConfig.length; j++){
            if (bracketsConfig[j][0] === stack[stack.length-2]
                && bracketsConfig[j][1] === stack[stack.length-1]){
                stack.pop();
                stack.pop();
            }
        }
    }
    return !stack.length;
}

