{ 
    let a = 10;
    {
        let a = 20;
        console.log(a)  
    }

    console.log(a)
}
//console.log(a)

(function () {
   var a = 10;
    (function (){
        var a = 20;
        console.log(a);
    })();
    console.log(a);
})()
//console.log(a);

function hasValue (p) {
    console.log(v);
    if (p) {
        var v = 'blue';
        console.log(v);
    }else {
        var v = 'red';
        console.log(v);
    }
    console.log(v);
}
hasValue(10);