let a;
function f(){
    console.log(a);
    let b= 2;
    //console.log(a,b);
    if(true){
        let c= 3;
        //console.log(a,b,c);
    }
    //console.log(a,b,c);
}
f();

//반복문 내에서의 함수 실행시.
var funcs = [];
for(var i = 0; i < 10; i++){
    funcs.push((function (v){
        return function (){
            console.log(v);
        }
    })(i))
}
funcs.forEach(function (f) {
    f();
})