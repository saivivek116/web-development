// let date1=new Date(2019, 10, 4);
// alert(date1);
// alert(date1.getTime());
// alert(date1.getFullYear());
// let x=1
// for(let x=0; x<10; x++)
// {
// 	console.log(x)
// }
// console.log("x="+x)
function multiply(x, y)
{
	return x*y;
}
console.log(multiply(2, 3));

greet=function(name, message){
	let msg="A new message by "+name+" message is "+message;
	return msg;
}
console.log(greet("vivek", "happy birthday"));

let newfunction=(x, y)=>{
	return x*y;
}
console.log(newfunction(3, 4));