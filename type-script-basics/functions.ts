let multiply=(x:number, y:number):number=>{
  return x*y;
}
console.log(2,3)
//function definition
let divideTwo:(x:number,y:number)=>number;
divideTwo=(x:number,y:number)=>{
  return x/y
}
let multiplyOrSquare=(x:number, y?:number)=>{
  if(y){
    return x*y
  }
  else{
    return x*x
  }
}
console.log(multiplyOrSquare(2))
console.log(multiplyOrSquare(2, 3))
let allPeopleIwant:string[]=[]
let pushToparty=(...people:string[])=>{
  console.log(people)
  let newpeople=people
  allPeopleIwant=allPeopleIwant.concat(newpeople)
  console.log(allPeopleIwant)
  return allPeopleIwant
}
pushToparty("vivek","harsha","baddam")