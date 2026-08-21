function sum(x,y){
    //console.log(x+y);
    return x+y;
    
}
// function sum1(callback){
//     let x = parseInt(prompt("enter first number"));
//     let y = parseInt(prompt("enter second number"));
//     callback(x,y); 
// }
// sum1(sum); 
function sub(x,y){
    return x-y;
}
function sumbitmsg(clbk,msg,clbk1){
    const result=clbk(20,30);

    const result1=clbk1(20,30);
    const fresult="h1"+msg+"your score is:"+result+"and your sub is:"+result1;
    console.log(fresult);
}
sumbitmsg(sum,"Mr. Vansh",sub);