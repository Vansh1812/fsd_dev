// create a username and passwrod and if it is equal and print success else print failure using callback fucntion

function createuser(username,password){
    if(username==="vansh" && password==="1234"){
        console.log("login successful");
    } else {
        console.log("login failed");
    }
}
function checkuser(clbk,username,password){
    clbk(username,password);
}
checkuser(createuser,"tanmay","1234");
// callback hell

