function checknum(num,clbk){
    if(num%2==0){
        clbk(num);
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
function display(value){
    console.log("Number is:",value);
}
checknum(24,display);