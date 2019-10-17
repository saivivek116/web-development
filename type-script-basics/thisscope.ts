let myname1={
  firstName:"saivivek",
  secondName:"vangaveti",
  calculateFullName:()=>{
    // return function(){
    // console.log(this)
    // return this.firstName+" "+this.secondName
    // }
    console.log(this)
  }

}
let somename=myname1.calculateFullName()
// somename()