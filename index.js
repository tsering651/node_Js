console.log('Hello world!');
function add(a,b){
    return a+b;
}
console.log(add(3,4));
console.log(process.argv);
var arg=process.argv.slice(2);
console.log("Added number is ", add(parseInt(arg[0]),parseInt(arg[1])));