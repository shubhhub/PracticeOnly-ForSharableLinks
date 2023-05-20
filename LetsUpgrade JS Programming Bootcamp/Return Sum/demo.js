function findSum(a, b){
    return a+b;
}


// Example 1
var a = 55;
var b = 26;
var c = findSum(a, b);
console.log(c);

// Example 2
console.log(findSum(500, 100));

function findSumHTML(a,b){
    var sum = parseInt(a) + parseInt(b);
    document.getElementById('result').innerHTML = sum;
}