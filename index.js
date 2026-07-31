//function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     console.log(msg+":"+result)
// }
// sumWithMsg(sum,"Using Calculation with js")

// function login(msg,error){
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log("welcome"+msg);
//     }
// }
// function loginVerification(username,password,clbk){
//     if(username=="hello" && password=="12345"){
//         clbk("Success",null);
//     }
//     else{
//         clbk(null,"Username or password is incorrect");
//     }
// }
// loginVerification("hello","12345",login)

// function checknum(num,clbk){
//     if(num%2==0){
//         clbk(num);
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// function display(value){
//     console.log("Number is:",value);
// }
// checknum(24,display);
// console.log("first"
// setTimeout(()=>{console.log("second")} , 1000)
// console.log("third");
//call back Hell
//  setTimeout(()=>{console.log("second")
//     setTimeout(()=>{console.log("second")
//         setTimeout(()=>{console.log("second")
//             setTimeout(()=>{console.log("second")
//                 setTimeout(()=>{console.log("second")
//                     setTimeout(()=>{console.log("second")

//                     } ,2000)
//                 },2000)
//             },2000)

//         } ,1000)
//     } ,1000)
// }, 1000);
 const mypromise = new Promise ((resolve, reject)=>{
    username = "lovely";
    password = "1233";
    if(username=="lovely" && password=="1233"){
        resolve("Login Success")
    }
    else{
        reject("Login Failed")
    }
})
mypromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("Promise execution completed")
})
// async function handlelogin(){
//     try{
//         await mypromise
//     }catch(e){
//         console.log(e)
//     }finally{
//         console.log("Promise execution completed")
//     }
// }
// handlelogin();