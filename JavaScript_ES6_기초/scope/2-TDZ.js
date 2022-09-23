//if문 for문 while문 switch-case문 '문단' 결과를 리턴하지 않음.
//-> 문 자체가 하나의 블록 스코프
//식 expression. 값이 될 수 있는 경우.
//값.
(function () {
    var a = 10;
    (function () {
        console.log(a);
        var a = 20;
    })();
    console.log(a);
})();
console.log(a);
//실행하고 끝. ---> 리턴 X

//TDZ : Temporal Dead Zone (임시 사각지대)
//1. 호이스팅
// 기존 var:
// 1) 변수명만 위로 올리고
// 2) undefined 를 할당한다.



if(true){
    let a = 10;
    if(true) {
        console.log(a); // refrence Error : a is not defined.
        const a = 20;
        console.log(a); // 20
    }
    console.log(a);
}
//console.log(a);

//1.호이스팅
// let, const:
// 1) 변수명만 위로 끌어올리고 끝.

var sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log(sum);
console.log(i); // i is not defined

while (true) {

}
switch (a) {
    //case: break;
}
