var value = 0;
var obj = {
    value: 1,
    setValue: function () {
        let a = 20;
        this.value = 2; //this : obj -> obj.value = 2;
        {
            let a = 10;
            this.value = 3;
        }
    }
}
obj.setValue();
console.log(value);
console.log(obj.value);