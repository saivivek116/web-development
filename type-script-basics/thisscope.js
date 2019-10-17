var _this = this;
var myname1 = {
    firstName: "saivivek",
    secondName: "vangaveti",
    calculateFullName: function () {
        // return function(){
        // console.log(this)
        // return this.firstName+" "+this.secondName
        // }
        console.log(_this);
    }
};
var somename = myname1.calculateFullName();
// somename()
