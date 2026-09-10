// function sum(x,y){
//     //console.log(x+y);
//     return x+y;
    
// }
// // function sum1(callback){
// //     let x = parseInt(prompt("enter first number"));
// //     let y = parseInt(prompt("enter second number"));
// //     callback(x,y); 
// // }
// // sum1(sum); 
// function sub(x,y){
//     return x-y;
// }
// function sumbitmsg(clbk,msg,clbk1){
//     const result=clbk(20,30);

//     const result1=clbk1(20,30);
//     const fresult="h1"+msg+"your score is:"+result+"and your sub is:"+result1;
//     console.log(fresult);
// }
// sumbitmsg(sum,"Mr. Vansh",sub);
// function test1(){
//     setTimeout(()=>{
//         console.log("task1");
//     },4000)
 
// }
// function test2(){
//     setTimeout(()=>{
//         console.log("task2");
//     },2000)

// }
// test1();
// test2();
function test1(cb){
    setTimeout(()=>{
        console.log("task1");
        cb();
    },40)

}
function test2(cb){
    setTimeout(()=>{
        console.log("task2");
        cb();

    },2000);
}
function test3(cb){
    setTimeout(()=>{
        console.log("task3");
        cb();
    },1000);
}
function test4(cb){
    setTimeout(()=>{
        console.log("task4");
        cb();
    },400);
}
test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
})
