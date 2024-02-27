//in order to use this functions in other file below is the syntax
//module.export gives us and object
//.add is key which is assigned a function

module.exports.add=function(a,b){
    return a+b;
}

module.exports.sub=function(a,b){
    return a-b;
}
module.exports.multiply=function(a,b){
    return a*b;
}
module.exports.div=function(a,b){
    return a/b;
}