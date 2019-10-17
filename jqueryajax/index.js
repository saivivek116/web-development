// $(document).ready(function(){
// 	$("#get-data").click(()=>{
// 		getAllData();
// 	})
// });
// let getAllData=()=>{
// 	console.log("making request")
// 	$.ajax({
// 		type:"GET",
// 		dataType:"json",
// 		url:"http://api.open-notify.org/astros.json",
// 		success:(data)=>{
// 			console.log(data);
// 			let allpeople=data.people;
// 			for(people of allpeople){
// 				let temprow=`<div class="row">
// 							<div class="col>${people.name}</div>"
// 							<div class="col>${people.craft}</div>
// 							</div>`
// 				$("#showData").append(temprow);

// 			}

// 		},
// 		error:()=>{
// 			alert("something went wrong");
// 		},
// 		beforeSend:()=>{

// 		},
// 		complete:()=>{

// 		},
// 		timeout: 3000


// 	});

// }
$(document).ready(() => {

    $('#get-data').click(()=>{

          getAllData(); 

    })// end get data 

  


}); // end of document.ready()

let getAllData = () => {

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://api.open-notify.org/astros.json', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
            
            let allPeople = data.people

            for(person of allPeople){

                 let tempRow = ` <div class="row">
                                     <div class="col">${person.name}</div>
                                     <div class="col">${person.craft}</div>
                                </div>`

                 $("#showData").append(tempRow); // placing data in division with id - 'showData'
            }

           
        },
        error: (data) => { // in case of error response

            alert("some error occured")

        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

