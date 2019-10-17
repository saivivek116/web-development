// let fun=(arr)=>{
// 	console.log(arr);
// }
// let arr=[2,3,4];
// fun(arr);
// let lst=[]
// let fun=(...arr)=>{
// 	lst=lst.concat(arr);
// 	//console.log(lst);
// }
// fun("vivek","sai","harsha");
// fun("kumar","ram");
// for(var x=0;x<lst.length;x++)
// {
// 	console.log(lst[x]);
// }
// let a=[1,2,3]
// let b=[4,5,6]
// let c=[...a, ...b]//spread
// var str=`this is  a multi line string
// so it is used for sentences which are more than 1 lines
// we can use expressions here using \${here the expression is used} like this ${1+1}`
// console.log(str)

// let ob={
// 	name:"saivivek",
// 	age:21,
// 	'sex':"male",
// 	class:"btech 4th year"
// }
//console.log(ob.age)
//console.log(ob.class)
let arrofob= [{
	name:"saivivek",
	age:21,
	'sex':"male",
	class:"btech 4th year",
	favmovies:["khaleja","athadu","maharshi"]
},
{
	name:"saikumar",
	age:21,
	'sex':"male",
	class:"btech 4th year",
	favmovies:["chanakya","poi"]

},
{
	name:"harsha",
	age:21,
	'sex':"male",
	class:"btech 3th year",
	favmovies:["gangleader","loukyam"]
}]
for(student of arrofob){
	console.log(student.favmovies);
}
